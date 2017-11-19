import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingPageComponent } from './routing-page/routing-page.component';

const appRoutes: Routes = [
    { path: '', component: RoutingPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}