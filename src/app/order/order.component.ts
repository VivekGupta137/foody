import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderService } from '../services/Order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[];
  selectedOrder: Order;
  showItem: boolean;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      response => {
        this.orders = response;
      }
    );
    this.selectedOrder = null;
  }

  onSelect(order: Order){
    this.selectedOrder = order;
    this.showItem = true;
  }
  closeItem(){
    this.showItem = false;
  }
}
