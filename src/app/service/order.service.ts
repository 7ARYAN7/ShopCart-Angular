import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Cart} from "../model/cart";
import {Createorder} from "../model/createorder";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private createOrderApi=environment.orderUrl;

  constructor(private http: HttpClient) { }

  public createOrder(userId:number):Observable<Createorder>{
    return this.http.get<Createorder>(`${this.createOrderApi}/${userId}/createOrder`);
  }

  public orderHistory(userId:number):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.createOrderApi}/${userId}/getOrders`);
  }
}
