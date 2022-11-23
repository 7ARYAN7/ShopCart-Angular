import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../service/product.service";
import {Product} from "../../../../model/product";
import {HttpErrorResponse} from "@angular/common/http";
import {CartService} from "../../../../service/cart.service";
import {ProductListComponent} from "../product-list.component";
import {CartComponent} from "../../cart/cart.component";
import {ModifyProductComponent} from "../../../admin/modify-product/modify-product.component";

@Component({
  selector: 'app-product-item',
  providers: [ModifyProductComponent],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 public product : Product;
 public products : Product[] = [];
  tot:number;
  role=window.localStorage.getItem('role');
  count=0;
  @Input() productItem?: Product;
  userId: number = parseInt(window.localStorage.getItem("userId") || "-1");
  constructor(private productService : ProductService,private cartService:CartService,private modifyP:ModifyProductComponent) {}

  ngOnInit(): void {
    this.tot= parseInt(window.localStorage.getItem('itemNumber')||'-1');
    console.log(this.tot+"jiji");
  }
  public handleAddToCart(id:number|undefined){
    this.cartService.addToCart(this.userId,id).subscribe(data =>{console.log(data.toString()+"dddddd")});
    if(this.tot==-1){
    this.tot=1;}
    else {
      this.count=this.tot+1;}
    window.localStorage.setItem('itemNumber',String(this.count));
    window.location.reload();
  }
  sendP(id:number|undefined){
    if(window.localStorage.getItem('productId')!=null)
    window.localStorage.removeItem('productId');
    window.localStorage.setItem('productId',String(id));
  }
  modifyProd(id:number|undefined){
    window.localStorage.setItem('modifyProductId',String(id));
    window.location.href='/modifyProduct';
  }
}
