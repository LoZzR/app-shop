import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShopService } from '../../shop-service.service';
import { Shop } from '../../shop.model';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {

  @ViewChild('f', { static: false }) shopForm: NgForm;
  @ViewChild('closebutton') closebutton;
  @Input() shop: Shop;
  editMode = false;
  editionShopId: number

  constructor(private shopService: ShopService) { }

  ngOnInit(){

  }

  onSubmit(f){
    const value = f.value;
    if(!this.editMode){
      const shop = new Shop(0, value.name, value.description, value.imagePath);
      this.shopService.addShop(shop);
      this.shopForm.reset();
    }
    else{
      const shop = new Shop(this.shop.id, value.name, value.description, value.imagePath);
      this.shopService.editShop(shop).subscribe(
        (shop: Shop) => console.log(shop)
      );
    }

    this.closebutton.nativeElement.click();
  }

}
