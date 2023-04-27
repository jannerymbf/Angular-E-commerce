import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromosComponent } from './pages/promos/promos.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { CardPromoComponent } from './components/card-promo/card-promo.component';

@NgModule({
  declarations: [
    AppComponent,
    PromosComponent,
    ProductsComponent,
    DetailComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ShowProductsComponent,
    CardPromoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
