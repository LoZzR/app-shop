import { Component, OnInit, Input } from '@angular/core';
import { ShopService } from '../../shop-service.service';

@Component({
  selector: 'app-bar-buttons',
  templateUrl: './bar-buttons.component.html',
  styleUrls: ['./bar-buttons.component.css']
})
export class BarButtonsComponent implements OnInit {

  @Input() nameShop: String;

  constructor(private shopService: ShopService) {
    
  }

  ngOnInit(): void {
  }

  likeShop(){
    this.shopService.likeShop(this.nameShop).subscribe();;
  }

}
