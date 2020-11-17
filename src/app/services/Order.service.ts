import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BACKEND_URL } from '../constants.token';
import { OrderDTO } from '../model/DTO/Order.dto';
import { Order } from '../model/order.model';
import { AuthService } from './Auth.service';
import { UtilityService } from './Utility.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit{
  private orders : Order[] = [];
  // private orders : Order[] = [
  //   new Order(1001, new Date(), []),
  //   new Order(1002, new Date(), [])
  // ];
  orderLoaded : EventEmitter<Order[]> = new EventEmitter<Order[]>();

  constructor(private auth: AuthService,private utility: UtilityService,private http: HttpClient, @Inject(BACKEND_URL)  private url: string ){}

  ngOnInit(): void {
  }

  getOrders(): Observable<Order[]>{
    if(this.auth.HEADER == null)  {
      console.log("NOT Loggedin");
      return null;
    }
    return this.http.get<OrderDTO[]>(this.url+"api/orders", this.auth.HEADER)
    .pipe(
      // tap(response=>console.log(this.utility.transformToOrder(response[0])))
      map(response=>{
        let fromDto: Order[] = [];
        for(let dto of response){
          if(dto.ingredientsList == null)
            dto.ingredientsList = [];
          fromDto.push(this.utility.transformToOrder(dto));
        }
        console.log(fromDto);
        return fromDto;
      })
    );
    // return this.orders;
  }



  addOrder(order: Order){
    if(this.auth.HEADER == null)  return null;
    this.http.post(this.url+"api/orders",{date: order.date, ingredientsList: order.ingredients}, this.auth.HEADER).subscribe();
    this.getOrders();
  }
}
