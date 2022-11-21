import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../service/product.service";
import {Product} from "../../../../model/product";
import {HttpErrorResponse} from "@angular/common/http";
import {CartService} from "../../../../service/cart.service";
import {ProductListComponent} from "../product-list.component";
import {CartComponent} from "../../cart/cart.component";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 public product : Product;
 public products : Product[] = [];

  @Input() productItem?: Product;
  userId: number = parseInt(window.localStorage.getItem("userId") || "-1");
  constructor(private productService : ProductService,private cartService:CartService) {}

  ngOnInit(): void {
  }
  public handleAddToCart(id:number|undefined){
    this.cartService.addToCart(this.userId,id).subscribe(data =>{console.log(data.toString()+"dddddd")});
  }
  sendP(id:number|undefined){
    if(window.localStorage.getItem('productId')!=null)
    window.localStorage.removeItem('productId');
    window.localStorage.setItem('productId',String(id));
  }
}
