import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(private shopService: ShopService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.preferredPage = this.route.snapshot.url[0].path === "liked-shops" ? true : false;
    if(this.preferredPage){
      this.shopService.getLikedShops().subscribe(
        shops => {
          this.shops = shops;
          this.isLoading = false;
        }
      );
    }
    else{
      this.shopService.getShops().subscribe(
        shops => {
          this.shops = shops;
          this.shopService.setShops(shops);
          this.isLoading = false;
        }
      );

      this.subscription = this.shopService.shopChanged.subscribe(
        shops => {
          this.shops = shops;
        }
      );
    }
  }

  onNewShop() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
