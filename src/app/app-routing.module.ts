import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import {CartComponent} from "./components/shopping-cart/cart/cart.component";
import {ProfileComponent} from "./components/shared/profile/profile.component";
import {OrderHistoryComponent} from "./components/shared/order-history/order-history.component";
import {EditProfileComponent} from "./components/shared/profile/edit-profile/edit-profile.component";
import {ProductdetailComponent} from "./components/shopping-cart/productdetail/productdetail.component";

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component:  ProfileComponent},
  { path: 'orders', component: OrderHistoryComponent },
  { path: 'shop', component: ShoppingCartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'productDetail', component: ProductdetailComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
