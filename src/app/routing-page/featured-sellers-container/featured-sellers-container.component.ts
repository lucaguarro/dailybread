import { Component, OnInit } from '@angular/core';
import { Seller } from '../../shared/seller.model';

@Component({
  selector: 'app-featured-sellers-container',
  templateUrl: './featured-sellers-container.component.html',
  styleUrls: ['./featured-sellers-container.component.css']
})
export class FeaturedSellersContainerComponent implements OnInit {
  sellers: Seller[] = [];
  constructor() { 

  }

  ngOnInit() {
    this.sellers.push( new Seller(
      'Jane Baker',
      '/assets/images/testImages/happyBaker.jpg',
      'Bakery1.0'
      )
    )
  }

}
