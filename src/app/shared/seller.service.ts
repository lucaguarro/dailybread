import { Subject } from 'rxjs/Subject';

import { Seller } from './seller.model';

export class SellerService {
  sellersChanged = new Subject<Seller[]>();

  private sellers: Seller[ ]=[
  new Seller("Steve43",  "https://imgur.com/vXkHF3r.jpg",  
    1,34.025049,-118.404766,"3637 Jasmine Ave","yes",10),
  new Seller("Anton13", "https://imgur.com/e1JhJRV.jpg",  3,
    34.008544,-118.39378,"4514 Jasmine Ave","yes",5),
  new Seller("Anton13", "https://imgur.com/e1JhJRV.jpg", 3, 34.008544, -118.39378, "4514 Jasmine Ave", "yes", 5),
new Seller("Lisa4", "https://imgur.com/Im3zIZv.jpg", 4, 33.932807, -118.430172, "770 W Imperial Ave", "no", 0),
new Seller("jack23", "https://imgur.com/hsTnSYv.jpg", 5, 34.3752434314273, -118.020756001685, "123 Mystreet", "yes", 10),
new Seller("Todd21", "https://imgur.com/lzVaEdm.jpg", 6, 34.5873021726235, -117.062466490964, "123 Mystreet", "yes ", 25),
new Seller("KevinRoy", "https://imgur.com/hlNHerZ.jpg", 7, 34.0886098355945, -117.713601730042, "123 Mystreet", "yes", 5),
new Seller("Ralph1", "https://imgur.com/wfuqDqM.jpg", 8, 33.9078487660623, -117.58377353688, "123 Mystreet", "no", 0),
new Seller("Spencer4", "https://imgur.com/sD77HUo.jpg", 9, 33.5377433967845, -117.894385292458, "123 Mystreet", "yes", 10),
new Seller("Jane34", "https://imgur.com/MS0mr6r.jpg", 10, 35.1039522246634, -117.276955875017, "123 Mystreet", "yes ", 25),
new Seller("Hilda6", "https://imgur.com/UY0whJM.jpg", 11, 33.9864779741028, -117.97051650427, "123 Mystreet", "yes", 5),
new Seller("JohnSteve", "https://imgur.com/wFsfyju.jpg", 12, 33.5521857321488, -117.553660092925, "123 Mystreet", "no", 0),

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