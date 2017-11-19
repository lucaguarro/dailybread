import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Seller } from '../shared/seller.model';

@Injectable()
export class CurrentSellerService {
  seller: Seller
  constructor(private http: Http) { 
  }
//name: string, profilePic: string, sellerID: number, lat:number, long:number, address:string, delivers:string, deliveryRadius:number
  setCurrentSeller(id: Number){
    var url = `/api/sellers/${id}`;
    console.log(url)
    this.http.get(url).map(res => res.json())
    .subscribe(
      (response: Response) => {
        console.log("ayy",response);
        const data = response.json();
        const sD = data[0];
        this.seller = new Seller(sD.name, sD.profilePic, sD.sellerID, sD.lat, sD.long, sD.address, sD.delivers, sD.deliveryRadius);
      },
      (error) => console.log("ayyoo whaddup",error)
    );;
  }
}
