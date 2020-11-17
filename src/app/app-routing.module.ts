import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FoodDetailComponent } from './food/food-detail/food-detail.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodComponent } from './food/food.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { AuthService } from './services/Auth.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: "", redirectTo: "foods", pathMatch: 'full'},
  {path: "foods", component: FoodComponent},
  {path: "foods/:id", component: FoodDetailComponent},
  {path: "cart", component: ShoppingCartComponent},
  {path: "orders", component: OrderComponent}, // canActivate: [AuthService]
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
