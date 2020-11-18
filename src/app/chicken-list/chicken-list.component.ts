import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chicken-list',
  templateUrl: './chicken-list.component.html',
  styleUrls: ['./chicken-list.component.scss']
})
export class ChickenListComponent implements OnInit {

  chicken = {
    "name":"Pollo Entero",
    "type":"Fresco",
    "price":"$160",
    "stock":"Disponible",
    "image": "assets/img/rawchicken.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
