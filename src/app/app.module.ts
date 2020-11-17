import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodItemComponent } from './food/food-list/food-item/food-item.component';
import { FoodDetailComponent } from './food/food-detail/food-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddIngredientComponent } from './shopping-cart/add-ingredient/add-ingredient.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { AppDropdownDirective } from './directives/dropdown.directive';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { CommonModule } from '@angular/common';
import { BACKEND_URL } from './constants.token';
import { FoodAddComponent } from './food/food-add/food-add.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    FoodListComponent,
    FoodItemComponent,
    FoodDetailComponent,
    ShoppingCartComponent,
    HeaderComponent,
    FooterComponent,
    AddIngredientComponent,
    NotFoundComponent,
    OrderComponent,
    AppDropdownDirective,
    OrderItemComponent,
    FoodAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {provide:BACKEND_URL, useValue:'http://localhost:4444/'} // dont forget to '/' at the end of url
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
