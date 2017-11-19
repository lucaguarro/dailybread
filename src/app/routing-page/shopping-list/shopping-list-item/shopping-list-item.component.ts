import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/product.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
	@Input() product: Product;
  	@Input() index: number;
  	@Input() qty:number;

  constructor() { }

  ngOnInit() {
  }

}