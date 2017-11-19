import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:src/app/routing-page/featured-sellers-container/featured-sellers-container.component.ts
import { Seller } from '../../shared/seller.model';
=======
import { Seller } from '../shared/seller.model';
import {SellerService} from '../shared/seller.service';
import{Subscription} from 'rxjs/Subscription';
>>>>>>> 32522f77b29dbc290a38adaa3babf1cc9393374c:src/app/featured-sellers-container/featured-sellers-container.component.ts

@Component({
  selector: 'app-featured-sellers-container',
  templateUrl: './featured-sellers-container.component.html',
  styleUrls: ['./featured-sellers-container.component.css']
})
export class FeaturedSellersContainerComponent implements OnInit {
  sellers: Seller[] = [];
  
private subscription: Subscription;
  constructor(private slService: SellerService) { 
  }

  ngOnInit() {
<<<<<<< HEAD:src/app/routing-page/featured-sellers-container/featured-sellers-container.component.ts
    this.sellers.push( new Seller(
      'Jane Baker',
      '/assets/images/testImages/happyBaker.jpg',
      'Bakery1.0'
      )
    )
=======
    this.sellers = this.slService.getSellers();
    this.subscription = this.slService.sellersChanged
      .subscribe(
        (sellers: Seller[]) => {
          this.sellers = sellers;
        }
      );
>>>>>>> 32522f77b29dbc290a38adaa3babf1cc9393374c:src/app/featured-sellers-container/featured-sellers-container.component.ts
  }

}
