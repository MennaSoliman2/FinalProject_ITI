import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { TeamProductComponent } from './components/team-product/team-product.component';

const routes: Routes = [
  {path:'', redirectTo:'home' ,pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'home'},
  {path:'card',component:CardComponent,title:'card'},
  {path:'about', component:AboutComponent ,title:'about'},
  {path:'contact', component:ContactComponent ,title:'contact'},
  {path:'products', component:ProductsComponent ,title:'products'},
  {path:'team',component:TeamProductComponent,title:'team'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
