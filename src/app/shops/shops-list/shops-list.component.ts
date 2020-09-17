import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css']
})
export class ShopsListComponent implements OnInit {

  shops = [];
  isLoading: boolean = true;
  preferredPage: boolean = false;

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

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
          this.isLoading = false;
        }
      );
    }
  }

}
