import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromosComponent } from './pages/promos/promos.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path: '', component: PromosComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'search/:searchProduct', component: ProductsComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
