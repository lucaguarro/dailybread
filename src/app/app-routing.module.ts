import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingPageComponent } from './routing-page/routing-page.component';
import { SellerPageComponent } from './seller-page/seller-page.component';

const appRoutes: Routes = [
    { path: '', component: RoutingPageComponent },
    { path: 'seller/:id', component: SellerPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}