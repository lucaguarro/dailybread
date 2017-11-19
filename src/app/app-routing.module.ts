import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingPageComponent } from './routing-page/routing-page.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { StoreFrontCreateComponent } from 'app/store-front-create/store-front-create.component';

const appRoutes: Routes = [
    { path: '', component: RoutingPageComponent },
    { path: 'seller/:id', component: SellerPageComponent },
    { path: 'create/seller', component: StoreFrontCreateComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}