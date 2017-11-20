import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { CurrentSellerService } from '../current-seller.service';
import { Seller } from '../../shared/seller.model';

@Component({
  selector: 'app-seller-header',
  templateUrl: './seller-header.component.html',
  styleUrls: ['./seller-header.component.css']
})
export class SellerHeaderComponent implements OnInit {
  seller: Seller;
  private subscription: Subscription;
  constructor( private currSlService: CurrentSellerService) { }

  ngOnInit() {
    this.seller = new Seller("Steve43",  "https://imgur.com/vXkHF3r.jpg",  
    1,34.025049,-118.404766,"3637 Jasmine Ave","yes",10);
      this.subscription = this.currSlService.sellerChanged
      .subscribe(
        (seller: Seller) => {
          this.seller = seller;
        }
      );
  }

}
