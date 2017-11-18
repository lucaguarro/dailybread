import { Component, OnInit, Input } from '@angular/core';
import { Seller } from '../../shared/seller.model';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  @Input() seller: Seller;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
