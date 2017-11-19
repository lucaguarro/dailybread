import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';
import {ProductService} from '../../shared/product.service';
import { ShoppingListItem } from '../../shared/Shopping-list-item.model';
import {ShoppingListService} from '../../shared/shopping-list.service';
import{Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	products: Product[] = [];
	shoppingList: ShoppingListItem[] = [];

  private subscription: Subscription;
  private subscription2: Subscription;

constructor(private pService: ProductService, private slService: ShoppingListService) { }
  ngOnInit() {

  	this.products = this.pService.getProducts();
  	this.shoppingList = this.slService.getProducts();
    this.subscription = this.pService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
          this.subscription2 = this.slService.shoppingListChanged
      .subscribe(
        (shoppingList: ShoppingListItem[]) => {
          this.shoppingList = shoppingList;
        }
      );
  }
  onCancel() {
    this.slService.setShoppingItems([]) ;
  }
}


