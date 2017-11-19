import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';
import {ProductService} from '../../shared/product.service';
import{Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	products: Product[] = [];
  private subscription: Subscription;

  constructor(private slService: ProductService) { }

  ngOnInit() {
  	this.products = this.slService.getProducts();
    this.subscription = this.slService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
  }

}


