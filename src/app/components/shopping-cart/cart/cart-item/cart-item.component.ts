import {Component, Input, OnInit} from '@angular/core';
import {Cart} from "../../../../model/cart";
import {CartService} from "../../../../service/cart.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem? : Cart;
  userId: number = parseInt(window.localStorage.getItem("userId") || "-1");
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  increaseQ(productId:number|undefined){
    this.cartService.addToCart(this.userId,productId).subscribe(data =>{console.log(data.toString()+"dddddd")});
   window.location.reload();

  }
   decreaseQ(productId:number|undefined){
    this.cartService.reduceQ(this.userId,productId).subscribe(data =>{console.log(data.toString()+"dddddd")});
     window.location.reload();
  }
  removeP(productId:number|undefined){
    this.cartService.removeP(this.userId,productId).subscribe(data=>{console.log(data.toString()+"dddddd")});
    window.location.reload();
  }
}
