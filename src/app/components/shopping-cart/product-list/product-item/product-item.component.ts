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
  userId=1;
  constructor(private productService : ProductService,private cartService:CartService) {}

  ngOnInit(): void {
    this.rNN();
  }
  public handleAddToCart(id:number|undefined){
    this.cartService.addToCart(this.userId,id).subscribe(data =>{console.log(data.toString()+"dddddd")});
  }
  public rNN():void{
    console.log(this.productItem?.price+"hhihihi");
  }
}
