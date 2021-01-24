import { Injectable } from '@angular/core';
import { Shop } from './shop.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shopChanged = new Subject<Shop[]>();

  private shops: Shop[] = [];
  private static API_ENDPOINT_SHOPS = AppConfig.API_ENDPOINT + 'shops';

  constructor(private http: HttpClient) { }

  getShops(){
    return this.http
      .get<Shop[]>(
        ShopService.API_ENDPOINT_SHOPS
      );
  }

  setShops(shops: Shop[]){
    this.shops = shops;
  }

  getShop(idShop: number){
    return this.http
      .get<Shop>(
        ShopService.API_ENDPOINT_SHOPS + '/' + idShop
      );
  }

  getLikedShops(){
    return this.http
      .get<Shop[]>(
        ShopService.API_ENDPOINT_SHOPS + '/liked'
      );
  }

  addShop(shop: Shop){
    return this.http.post<Shop>(ShopService.API_ENDPOINT_SHOPS,shop);
  }

  editShop(shop: Shop){
    return this.http.put<Shop>(ShopService.API_ENDPOINT_SHOPS,shop);
  }

  deleteShop(idShop: number){
    let indexShop = 0;
    for(let i = 0; i < this.shops.length ; i++){
      if(this.shops[i].id === idShop){
        indexShop = i;
        break;
      }
    }
    
    this.shops.splice(indexShop, 1);
    this.shopChanged.next(this.shops.slice());
    return this.http.delete<void>(ShopService.API_ENDPOINT_SHOPS + '/' + idShop);
  }

  likeShop(idShop: number){
    return this.http.post(
      ShopService.API_ENDPOINT_SHOPS + '/like', idShop
    );
  }

  
}
