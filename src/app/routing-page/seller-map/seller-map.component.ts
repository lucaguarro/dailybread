import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Seller } from '../../shared/seller.model';
import {SellerService} from '../../shared/seller.service';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
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
  constructor(private slService: SellerService, private http: Http) {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(this.setPosition);
    this.http.get('/api/sellers').map(res => res.json()).subscribe(
      (response) => this.loadSellers(response),
      (error) => console.log(error)
    );
    this.sellers = this.slService.getSellers();
    this.subscription = this.slService.sellersChanged
      .subscribe(
        (sellers: Seller[]) => {
          this.sellers = sellers;
        }
      );
  }

  loadSellers(response) {
    console.log(response);
    this.sellers = [];
    response.forEach(element => {
      this.sellers.push(new Seller(element.name, element.profilePic, element.sellerID, element.lat, element.lng,
      element.address, element.delivers, element.deliveryRadius))
    });
    this.slService.setSellers(this.sellers);
  }

  setPosition(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    console.log(this.lat + ' ' + this.lng);
  }

}
