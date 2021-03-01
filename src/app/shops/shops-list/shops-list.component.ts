import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ShopService } from '../shop-service.service';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css']
})
export class ShopsListComponent implements OnInit, OnDestroy {

  shops = [];
  isLoading: boolean = true;
  preferredPage: boolean = false;
  isAdmin: boolean = true;
  subscription: Subscription;

  page = 1;
  count = 0;
  pageSize = 1;
  pageSizes = [1, 2, 3, 4];

  constructor(private shopService: ShopService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.retrieveShops();
  }

  onNewShop() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveShops();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveShops();
  }

  private retrieveShops(){
    const params = this.getRequestParams(this.page, this.pageSize);
    this.preferredPage = this.route.snapshot.url[0].path === "liked-shops" ? true : false;
    if(this.preferredPage){
      this.shopService.getLikedShops().subscribe(
        shops => {
          this.shops = shops;
          this.shopService.setPreferredShops(shops);
          this.isLoading = false;
          this.count = shops['totalItems'];
        }, error => {
          this.router.navigate(['error', error.status]);
        }
      );
      this.subscription = this.shopService.preferredShopChanged.subscribe(
        shops => {
          this.shops = shops;
        }
      );
    }
    else{
      this.shopService.getNotLikedShops(params).subscribe(
        shops => {
          this.shops = shops['shops'];
          this.shopService.setShops(shops);
          this.isLoading = false;
          this.count = shops['totalItems'];;
        }, error => {
          this.router.navigate(['error', error.status]);
        }
      );
      
      this.subscription = this.shopService.shopChanged.subscribe(
        shops => {
          this.shops = shops;
        }
      );
    }

    this.isAdmin = this.authService.isAdmin();
  }

  private getRequestParams(page, pageSize) {

    let params = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}