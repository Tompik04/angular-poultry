import { Component, OnInit } from '@angular/core';
import { Chicken } from './Chicken';

@Component({
  selector: 'app-chicken-list',
  templateUrl: './chicken-list.component.html',
  styleUrls: ['./chicken-list.component.scss']
})
export class ChickenListComponent implements OnInit {

  chickens: Chicken[] = [
  {
    name: "Pollo Entero",
    type: "Fresco",
    price: 160,
    stock: 20,
    image: "assets/img/rawchicken.png",
    clearance: false,
  },
  {
    name:"Pechugas",
    type:"Fresco",
    price: 265,
    stock: 3,
    image: "assets/img/breastchicken.png",
    clearance: false,
  },
  {
    name:"Pata-Muslo",
    type:"Fresco",
    price: 170,
    stock: 2,
    image: "assets/img/quarterchicken.png",
    clearance: false,
  },
  {
    name:"Pata-Muslo",
    type:"Congelado",
    price: 140,
    stock: 7,
    image: "assets/img/quarterchicken.png",
    clearance: true,
  },
  {
    name:"Alitas",
    type:"Fresco",
    price: 90,
    stock: 0,
    image: "assets/img/wingschicken.png",
    clearance: false,
  }
];


  constructor() { }

  ngOnInit(): void {
  }

}
