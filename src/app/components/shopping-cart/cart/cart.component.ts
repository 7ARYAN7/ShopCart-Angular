import { Component, OnInit } from '@angular/core';
import {Cart} from "../../../model/cart";
import {CartService} from "../../../service/cart.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList : Cart[] = [];

  cartTotal = 0;
  totalAmount = 0;
  cartId =1;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.loadCart();
  }
    loadCart(){
    this.cartService.getCart(this.cartId).subscribe((cartItems)=>{
      this.cartList=cartItems;
     for(let i=0;i<cartItems.length;i++){
       this.totalAmount+=cartItems[i].quantity*cartItems[i].product.price;
     }
    } )
    }
}
