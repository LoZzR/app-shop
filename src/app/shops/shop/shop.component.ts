import { Component, OnInit, Input } from '@angular/core';
import { Shop } from '../shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input() shop: Shop;
  showedDescription: string;

  constructor() { }

  ngOnInit() {
    if(this.shop.description.length > 100){
      this.showedDescription = this.shop.description.substring(0,100) + "...";
    }
    else this.showedDescription = this.shop.description;
  }

}
