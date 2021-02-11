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

  @Input() shop: Shop;
  isAdmin = false;

  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute, private authService: AuthService) {
    
  }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }

  likeShop(){
    this.shopService.likeShop(this.shop.id).subscribe();;
  }

  editShop(){
    this.router.navigate(["/shops", this.shop.id]);
  }

  deleteShop(){
    this.shopService.deleteShop(this.shop.id).subscribe();
  }

}
