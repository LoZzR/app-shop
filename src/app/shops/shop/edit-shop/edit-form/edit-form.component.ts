import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/shops/shop-service.service';
import { Shop } from 'src/app/shops/shop.model';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @ViewChild('f', { static: false }) shopForm: NgForm;
  @ViewChild('closebutton') closebutton;
  editMode = false;
  editionShopId: number;S

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(){
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
      //this.closebutton.nativeElement.click();
      const shop = new Shop(0, value.name, value.description, value.imagePath);
      this.shopService.addShop(shop);
      this.shopForm.reset();
    }
    else{
      const shop = new Shop(this.editionShopId, value.name, value.description, value.imagePath);
      this.shopService.editShop(shop).subscribe(
        (shop: Shop) => console.log(shop)
      );
    }
  }


}
