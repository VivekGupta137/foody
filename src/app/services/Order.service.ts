import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit{
  private orders : Order[] = [
    new Order(1001, new Date(), []),
    new Order(1002, new Date(), [])
  ];
  orderLoaded : EventEmitter<Order[]> = new EventEmitter<Order[]>();
  constructor(){}

  ngOnInit(): void {
  }

  getOrders():Order[]{
    return this.orders;
  }
  addOrder(order: Order){
    this.orders.push(order);
  }
}
