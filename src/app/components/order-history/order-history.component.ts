import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../service/order.service";
import {Order} from "../../model/order";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  cartId : number = parseInt(window.localStorage.getItem("userId") || "-1");

  orderL:Order[];

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
   this.orderH();
  }

  orderH(){
    this.orderService.orderHistory(this.cartId).subscribe((response)=>{
      this.orderL = response;
    })
  }
}
