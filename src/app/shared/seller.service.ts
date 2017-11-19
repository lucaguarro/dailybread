import { Subject } from 'rxjs/Subject';

import { Seller } from './seller.model';

export class SellerService {
  sellersChanged = new Subject<Seller[]>();

  private sellers: Seller[ ]=[
  new Seller("Steve43",  "https://imgur.com/vXkHF3r.jpg",  
    1,34.025049,-118.404766,"3637 Jasmine Ave","yes",10),
  new Seller("Anton13", "https://imgur.com/e1JhJRV.jpg",  3,
    34.008544,-118.39378,"4514 Jasmine Ave","yes",5)
  ];

  setSellers(sellers: Seller[]) {
    this.sellers = sellers;
    this.sellersChanged.next(this.sellers.slice());
  }

  getSellers() {
    return this.sellers.slice();
  }

  getSeller(index: number) {
    return this.sellers[index];
  }

  addSeller(seller: Seller) {
    this.sellers.push(seller);
    this.sellersChanged.next(this.sellers.slice());
  }

  addSellers(sellers: Seller[]) {
    this.sellers.push(...sellers);
    this.sellersChanged.next(this.sellers.slice());
  }

  updateSeller(index: number, newSeller: Seller) {
    this.sellers[index] = newSeller;
    this.sellersChanged.next(this.sellers.slice());
  }

  deleteSeller(index: number) {
    this.sellers.splice(index, 1);
    this.sellersChanged.next(this.sellers.slice());
  }
}