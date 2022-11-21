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
  tot:number;
  count=0;
  userId: number = parseInt(window.localStorage.getItem("userId") || "-1");
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.tot= parseInt(window.localStorage.getItem('itemNumber')||'-1');
  }
  increaseQ(productId:number|undefined){
    this.cartService.addToCart(this.userId,productId).subscribe(data =>{console.log(data.toString()+"dddddd")});
    if(this.tot==-1){
      this.tot=1;}
    else {
      this.count=this.tot+1;}
    window.localStorage.setItem('itemNumber',String(this.count));
   window.location.reload();

  }
   decreaseQ(productId:number|undefined){
    this.cartService.reduceQ(this.userId,productId).subscribe(data =>{console.log(data.toString()+"dddddd")});
     if(this.tot==-1){
       this.tot=1;}
     else {
       this.count=this.tot-1;}
     window.localStorage.setItem('itemNumber',String(this.count));
     window.location.reload();
  }
  removeP(productId:number|undefined){
    this.cartService.removeP(this.userId,productId).subscribe(data=>{console.log(data.toString()+"dddddd")});
    window.location.reload();
    if(this.tot==-1){
      this.tot=1;}
    else {
      // @ts-ignore
      this.count= this.tot - this.cartItem?.quantity;
    }
    window.localStorage.setItem('itemNumber',String(this.count));
  }
}
