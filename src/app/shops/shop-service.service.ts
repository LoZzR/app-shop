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
  preferredShopChanged = new Subject<Shop[]>();

  private shops: Shop[] = [];
  private preferredShops: Shop[] = [];

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

  setPreferredShops(shops: Shop[]){
    this.preferredShops = shops;
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

  getNotLikedShops(){
    return this.http
      .get<Shop[]>(
        ShopService.API_ENDPOINT_SHOPS + '/not-liked'
      );
  }

  addShop(shop: Shop){
    return this.http.post<Shop>(ShopService.API_ENDPOINT_SHOPS,shop).subscribe(
      (shop: Shop) => {
        this.shops.push(shop);
        this.shopChanged.next(this.shops.slice());
      }
    );
  }

  editShop(shop: Shop){
    return this.http.put<Shop>(ShopService.API_ENDPOINT_SHOPS,shop);
  }

  deleteShop(idShop: number){
    this.removeShop(idShop, this.shops, this.shopChanged);
    return this.http.delete<void>(ShopService.API_ENDPOINT_SHOPS + '/' + idShop);
  }

  likeShop(idShop: number){
    this.removeShop(idShop, this.shops, this.shopChanged);
    return this.http.post(
      ShopService.API_ENDPOINT_SHOPS + '/like/' + idShop,""
    );
  }

  removeFromLikedShopList(idShop: number){
    this.removeShop(idShop, this.preferredShops, this.preferredShopChanged);
    return this.http.delete<void>(ShopService.API_ENDPOINT_SHOPS + '/liked/' + idShop);
  }

  private removeShop(idShop: number, listShops: Shop[], listShopsChanged:  Subject<Shop[]>){
    let indexShop = 0;
    for(let i = 0; i < listShops.length ; i++){
      if(listShops[i].id === idShop){
        indexShop = i;
        break;
      }
    }
    
    listShops.splice(indexShop, 1);
    listShopsChanged.next(listShops.slice());
  }

  
}
