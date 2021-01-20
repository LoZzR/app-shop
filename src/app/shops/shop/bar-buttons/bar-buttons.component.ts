import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../../shop-service.service';

@Component({
  selector: 'app-bar-buttons',
  templateUrl: './bar-buttons.component.html',
  styleUrls: ['./bar-buttons.component.css']
})
export class BarButtonsComponent implements OnInit {

  @Input() idShop: number;
  isAdmin: boolean = true;

  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
  }

  likeShop(){
    this.shopService.likeShop(this.idShop).subscribe();;
  }

  editShop(){
    this.router.navigate(["/shops", this.idShop]);
  }

}
