import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ShopService } from '../../shop-service.service';
import { Shop } from '../../shop.model';

@Component({
  selector: 'app-bar-buttons',
  templateUrl: './bar-buttons.component.html',
  styleUrls: ['./bar-buttons.component.css']
})
export class BarButtonsComponent implements OnInit {

  @Input() idShop: number;
  isAdmin = false;

  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }

  likeShop(){
    this.shopService.likeShop(this.idShop).subscribe();
  }

  editShop(){
    this.router.navigate(["/shops", this.idShop]);
  }

  deleteShop(){
    this.shopService.deleteShop(this.idShop).subscribe();
  }

}
