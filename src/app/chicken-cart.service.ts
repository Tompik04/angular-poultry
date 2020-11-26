import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chicken } from './chicken-list/Chicken';

@Injectable({
  providedIn: 'root'
})
export class ChickenCartService {

  private _cartList: Chicken[] = [];

  cartList: BehaviorSubject<Chicken[]> = new BehaviorSubject(this._cartList);


  constructor() { }

  addToCart(chicken: Chicken) {
    let item: Chicken = this._cartList.find((v1) => v1.name == chicken.name);
    if(!item){
      this._cartList.push({ ... chicken});
    } else{
      item.quantity += chicken.quantity;
    }
    this.cartList.next(this._cartList);
  }

}