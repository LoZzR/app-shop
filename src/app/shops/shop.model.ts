export class Shop {
  constructor(public id: number, public name: string, public description: string, public imagePath: string){}

  equals(shop: Shop): boolean{
    if(this.id === shop.id) return true;
    return false;
  }
}
