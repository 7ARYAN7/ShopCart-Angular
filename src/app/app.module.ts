import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {BsNavbarComponent} from "./bs-navbar/bs-navbar.component";
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UsersService} from "./users.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

// import {CoreModule} from "./core/core.module";
// import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
// import { HeaderComponent } from './components/shared/header/header.component';
// import { FooterComponent } from './components/shared/footer/footer.component';
// import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    HomeComponent
    // AdminProductsComponent,
    // AdminOrdersComponent,
    //  ShoppingCartComponent,
    //  HeaderComponent,
    //  FooterComponent,
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent},
      {path: 'my/orders', component: MyOrdersComponent},
      {path: 'order-success', component: OrderSuccessComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/products', component: AdminProductsComponent},
      {path: 'admin/orders', component: AdminOrdersComponent}
    ]),
    ReactiveFormsModule,
    //CoreModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
