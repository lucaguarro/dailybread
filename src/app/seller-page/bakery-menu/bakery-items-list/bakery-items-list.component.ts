import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/product.model';

@Component({
  selector: 'app-bakery-items-list',
  templateUrl: './bakery-items-list.component.html',
  styleUrls: ['./bakery-items-list.component.css']
})
export class BakeryItemsListComponent implements OnInit {
  private products =[
    new Product(1,"Baguette","https://imgur.com/ZvN96gJ.jpg",1,"Homemade baguette baked daily",1.95,20,1),
    new Product(2,"Caramel Popcorn","https://imgur.com/XxXpjw3.jpg",1,"Homemade Carmel Popcorn",5.85,25,5)
  ];
  constructor() { }

  ngOnInit() {
  }

}
