import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedDealsContainerComponent } from './routing-page/featured-deals-container/featured-deals-container.component';
import { DealComponent } from './routing-page/featured-deals-container/deal/deal.component';
import { FeaturedSellersContainerComponent } from './routing-page/featured-sellers-container/featured-sellers-container.component';
import { SellerComponent } from './routing-page/featured-sellers-container/seller/seller.component';
import { SellerMapComponent } from './routing-page/seller-map/seller-map.component';

import { AgmCoreModule } from '@agm/core';
import { RoutingPageComponent } from './routing-page/routing-page.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SellerHeaderComponent } from './seller-page/seller-header/seller-header.component';
import { BakeryMenuComponent } from './seller-page/bakery-menu/bakery-menu.component';
import { BakeryMenuNavbarComponent } from './seller-page/bakery-menu/bakery-menu-navbar/bakery-menu-navbar.component';
import { BakeryItemsListComponent } from './seller-page/bakery-menu/bakery-items-list/bakery-items-list.component';
import { BakeryItemComponent } from './seller-page/bakery-menu/bakery-items-list/bakery-item/bakery-item.component';
import { StoreNavBarComponent } from './seller-page/store-nav-bar/store-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturedDealsContainerComponent,
    DealComponent,
    FeaturedSellersContainerComponent,
    SellerComponent,
    SellerMapComponent,
    RoutingPageComponent,
    SellerPageComponent,
    SellerHeaderComponent,
    BakeryMenuComponent,
    BakeryMenuNavbarComponent,
    BakeryItemsListComponent,
    BakeryItemComponent,
    StoreNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA34CD56vz2YVcQyd0WfFZo3LWp7HfzEG8'
    }),
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
