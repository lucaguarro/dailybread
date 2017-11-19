import { Component, OnInit } from '@angular/core';
import { Seller } from '../../shared/seller.model';
import {SellerService} from '../../shared/seller.service';
import{Subscription} from 'rxjs/Subscription';

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
    this.sellers = this.slService.getSellers();
    this.subscription = this.slService.sellersChanged
      .subscribe(
        (sellers: Seller[]) => {
          this.sellers = sellers;
        }
      );
  }

}
