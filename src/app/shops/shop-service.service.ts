import { Injectable } from '@angular/core';
import { Shop } from './shop.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  getShops(){
    return this.http
      .get<Shop[]>(
        'http://localhost:8090/shops'
      );
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
    return this.http.delete<void>('http://localhost:8090/shops/' + idShop);
  }

  likeShop(idShop: number){
    return this.http.post(
      'http://localhost:8090/shops/like', idShop
    );
  }

  
}
