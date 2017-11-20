import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Seller } from '../shared/seller.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CurrentSellerService {
  seller: Seller
  sellerChanged = new Subject<Seller>();
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
        const data = response;
        const sD = data[0];
        this.seller = new Seller(sD.name, sD.profilePic, sD.sellerID, sD.lat, sD.lng, sD.address, sD.delivers, sD.deliveryRadius);
        console.log("this seller", this.seller);
        this.sellerChanged.next();
      },
      (error) => console.log("ayyoo whaddup",error)
    );;
  }
  getSeller(){
    return this.seller;
  }
}
