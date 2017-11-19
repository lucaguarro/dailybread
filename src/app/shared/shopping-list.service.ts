
import { Subject } from 'rxjs/Subject';

import {ShoppingListItem} from './shopping-list-item.model';

export class ShoppingListService {
  shoppingListChanged = new Subject<ShoppingListItem[]>();

  private shoppingList: ShoppingListItem[]=[
  new ShoppingListItem(2,5),
  new ShoppingListItem(3,8),
  new ShoppingListItem(1,2),
  new ShoppingListItem(4,1)
  ];

  setShoppingItems(shoppingList: ShoppingListItem[]) {
    this.shoppingList = shoppingList;
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  getProducts() {
    return this.shoppingList.slice();
  }

  getProduct(index: number) {
    return this.shoppingList[index];
  }

  addProduct(shoppingListItem: ShoppingListItem) {
    this.shoppingList.push(shoppingListItem);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  addProducts(shoppingList: ShoppingListItem[]) {
    this.shoppingList.push(...shoppingList);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  updateProductQTY(index: number, qty:number) {
    this.shoppingList[index].quantity = qty;
    this.shoppingListChanged.next(this.shoppingList.slice());
  }

  deleteProduct(index: number) {
    this.shoppingList.splice(index, 1);
    this.shoppingListChanged.next(this.shoppingList.slice());
  }
}
