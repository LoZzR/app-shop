import { Injectable } from '@angular/core';
import { Shop } from './shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shops: Shop[] = [
    new Shop("Macdonald ","McDonalds.com is your hub for everything McDonald's. Find out more about our menu items and promotions today!","https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png"),
    new Shop("Adidas","Welcome to adidas Shop for adidas shoes, clothing and view new collections for adidas Originals, running, football, training and much more","https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"),
    new Shop("Ray-Ban","Ray-Ban® is the global leader in premium eyewear market. Discover the collections of sunglasses and eyeglasses for women, men and kids","https://upload.wikimedia.org/wikipedia/commons/d/d1/Ray-Ban_logo.svg"),
    new Shop("Apple","Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert","https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201809210816")
  ];

  constructor() { }

  getShops(){
    return this.shops.slice();
  }
}
