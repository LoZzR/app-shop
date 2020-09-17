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

  getLikedShops(){
    return this.http
      .get<Shop[]>(
        'http://localhost:8090/liked-shops'
      );
  }

  likeShop(nameShop: String){
    return this.http.post(
      'http://localhost:8090/shops/like', nameShop
    );
  }

  
}
