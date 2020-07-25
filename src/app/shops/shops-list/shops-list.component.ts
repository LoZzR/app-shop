import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop-service.service';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.css']
})
export class ShopsListComponent implements OnInit {

  shops = [];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.getShops().subscribe(
      shops => {
        this.shops = shops;
      }
    );
  }

}
