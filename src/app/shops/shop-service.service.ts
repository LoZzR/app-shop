import { Injectable } from '@angular/core';
import { Shop } from './shop.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shopChanged = new Subject<Shop[]>();
  private shops: Shop[] = [];

  constructor(private http: HttpClient) { }

  getShops(){
    return this.http
      .get<Shop[]>(
        'http://localhost:8090/shops'
      );
  }

  setShops(shops: Shop[]){
    this.shops = shops;
  }

  getShop(idShop: number){
    return this.http
      .get<Shop>(
        'http://localhost:8090/shops/' + idShop
      );
  }

  getLikedShops(){
    return this.http
      .get<Shop[]>(
        'http://localhost:8090/liked-shops'
      );
  }

  addShop(shop: Shop){
    return this.http.post<Shop>("http://localhost:8090/shops",shop);
  }

  editShop(shop: Shop){
    return this.http.put<Shop>("http://localhost:8090/shops",shop);
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
    return this.http.delete<void>('http://localhost:8090/shops/' + idShop);
  }

  likeShop(idShop: number){
    return this.http.post(
      'http://localhost:8090/shops/like', idShop
    );
  }

  
}
