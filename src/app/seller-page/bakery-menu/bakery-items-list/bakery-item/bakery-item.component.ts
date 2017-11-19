import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../shared/product.model';

@Component({
  selector: 'app-bakery-item',
  templateUrl: './bakery-item.component.html',
  styleUrls: ['./bakery-item.component.css']
})
export class BakeryItemComponent implements OnInit {
  @Input() product: Product;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
