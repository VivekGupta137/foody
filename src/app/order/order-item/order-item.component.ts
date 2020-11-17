import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;
  @Output() orderClose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }
  close(){
    this.orderClose.emit(false);
  }

}
