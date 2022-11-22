import { Component, OnInit } from '@angular/core';
import {Cart} from "../../../model/cart";
import {CartService} from "../../../service/cart.service";
import {OrderService} from "../../../service/order.service";
import {Createorder} from "../../../model/createorder";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  createOrder:Createorder;
  cartList : Cart[] = [];
  quant=0;
  cartTotal = 0;
  totalAmount = 0;
  cartId : number = parseInt(window.localStorage.getItem("userId") || "-1");
  constructor(private cartService:CartService,private orderService:OrderService) { }

  ngOnInit(): void {
    this.loadCart();
  }
    loadCart(){
    this.cartService.getCart(this.cartId).subscribe((cartItems)=>{
      this.cartList=cartItems;
     for(let i=0;i<cartItems.length;i++){
       this.quant = this.quant+cartItems[i].quantity;
       this.totalAmount+=cartItems[i].quantity*cartItems[i].product.price;
     }
      window.localStorage.setItem('itemNumber',String(this.quant));
    } )

    }
    createO(){
     this.orderService.createOrder(this.cartId).subscribe((response)=>{
       this.createOrder=response;
     })
      window.location.href='/order';
    }

}
