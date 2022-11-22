import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../service/order.service";
import {Createorder} from "../../../model/createorder";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  createOrder:Createorder;
  cartId : number = parseInt(window.localStorage.getItem("userId") || "-1");
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
  }
}
