import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../shop-service.service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {

  editMode: boolean = false;

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(){
    const idShop = this.route.snapshot.params['id'];
    this.editMode = idShop ? true : false;
  }

}
