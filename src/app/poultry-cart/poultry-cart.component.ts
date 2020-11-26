import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChickenCartService } from '../chicken-cart.service';
import { Chicken } from '../chicken-list/Chicken';

@Component({
  selector: 'app-poultry-cart',
  templateUrl: './poultry-cart.component.html',
  styleUrls: ['./poultry-cart.component.scss']
})
export class PoultryCartComponent implements OnInit {

  cartList$!: Observable<Chicken[]>;

  constructor(private cart: ChickenCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }



}
