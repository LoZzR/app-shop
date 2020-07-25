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
        'http://localhost:8080/shops'
      );
  }
}
