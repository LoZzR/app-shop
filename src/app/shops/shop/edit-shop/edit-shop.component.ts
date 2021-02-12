import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../shop-service.service';
import { Shop } from '../../shop.model';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {

  @ViewChild('f', { static: false }) shopForm: NgForm;
  @Input() shop: Shop;
  editMode = false;
  editionShopId: number;

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*if(this.shop !== undefined && this.shop !== null){
      console.log("******************" + this.shop.name + "***" +this.shop.description + "****"+ this.shop.imagePath);
      this.shopForm.setValue({
        name: this.shop.name,
        description: this.shop.description,
        imagePath: this.shop.imagePath
      });
    }*/
  }

  onSubmit(f){
    const value = f.value;
    if(!this.editMode){
      const shop = new Shop(0, value.name, value.description, value.imagePath);
      this.shopService.addShop(shop).subscribe();
    }
    else{
      const shop = new Shop(this.shop.id, value.name, value.description, value.imagePath);
      this.shopService.editShop(shop).subscribe(
        (shop: Shop) => console.log(shop)
      );
    }
  }

}
