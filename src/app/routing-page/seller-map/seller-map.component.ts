import { Component, OnInit } from '@angular/core';
import { Seller } from '../../shared/seller.model';
import {SellerService} from '../../shared/seller.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-seller-map',
  templateUrl: './seller-map.component.html',
  styleUrls: ['./seller-map.component.css']
})
export class SellerMapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
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
