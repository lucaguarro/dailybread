import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedDealsContainerComponent } from './featured-deals-container/featured-deals-container.component';
import { DealComponent } from './featured-deals-container/deal/deal.component';
import { FeaturedSellersContainerComponent } from './featured-sellers-container/featured-sellers-container.component';
import { SellerComponent } from './featured-sellers-container/seller/seller.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturedDealsContainerComponent,
    DealComponent,
    FeaturedSellersContainerComponent,
    SellerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
