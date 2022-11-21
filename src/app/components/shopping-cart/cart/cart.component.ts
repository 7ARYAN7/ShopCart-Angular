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
  quant=0;
  cartTotal = 0;
  totalAmount = 0;
  cartId : number = parseInt(window.localStorage.getItem("userId") || "-1");
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.loadCart();

  }
    loadCart(){
      console.log("callld");
    this.cartService.getCart(this.cartId).subscribe((cartItems)=>{
      this.cartList=cartItems;
     for(let i=0;i<cartItems.length;i++){
       this.quant = this.quant+cartItems[i].quantity;
       this.totalAmount+=cartItems[i].quantity*cartItems[i].product.price;
     }
      window.localStorage.setItem('itemNumber',String(this.quant));
    } )

    }
}
