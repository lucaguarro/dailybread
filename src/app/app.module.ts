import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedDealsContainerComponent } from './featured-deals-container/featured-deals-container.component';
import { DealComponent } from './featured-deals-container/deal/deal.component';
import { FeaturedSellersContainerComponent } from './featured-sellers-container/featured-sellers-container.component';
import { SellerComponent } from './featured-sellers-container/seller/seller.component';
import { SellerMapComponent } from './seller-map/seller-map.component';

import { AgmCoreModule } from '@agm/core';
import {SellerService} from './shared/seller.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturedDealsContainerComponent,
    DealComponent,
    FeaturedSellersContainerComponent,
    SellerComponent,
    SellerMapComponent,
    
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA34CD56vz2YVcQyd0WfFZo3LWp7HfzEG8'
    }),
    HttpModule
  ],
  providers: [SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
