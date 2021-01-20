import { Component, OnInit, ViewChild } from '@angular/core';
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
  editMode = false;
  editionShopId: number;

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idShop = this.route.snapshot.params['id'];
    this.editMode = idShop ? true : false;
    if(this.editMode){
      this.shopService.getShop(idShop).subscribe(
        (shop: Shop) => {
          this.shopForm.setValue({
            name: shop.name,
            description: shop.description,
            imagePath: shop.imagePath
          });
          this.editionShopId = shop.id;
          this.editMode = true;
        }
      );
    }
  }

  onSubmit(f){
    const value = f.value;
    if(!this.editMode){
      const shop = new Shop(0, value.name, value.description, value.imagePath);
      this.shopService.addShop(shop).subscribe();
    }
    else{
      const shop = new Shop(this.editionShopId, value.name, value.description, value.imagePath);
      this.shopService.editShop(shop).subscribe(
        (shop: Shop) => console.log(shop)
      );
    }
  }

}
