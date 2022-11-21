import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import {ProductService} from "../../../service/product.service";
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product:Product;
  userId: number = parseInt(window.localStorage.getItem("userId") || "-1");
  id= parseInt(window.localStorage.getItem('productId')||'-1');
  tot:number;
  count=0;

  constructor(private productService:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getDetail();
    this.tot= parseInt(window.localStorage.getItem('itemNumber')||'-1');
  }
  getDetail(){
    this.productService.getProductByID(this.id).subscribe((response)=>{
      this.product=response;
    })
  }
  public handleAddToCart(id:number|undefined){
    this.cartService.addToCart(this.userId,this.id).subscribe((response) => {
      console.log(response.toString()+"dddddd")
    });
    if(this.tot==-1){
      this.tot=1;}
    else {
      this.count=this.tot+1;
    }
    window.localStorage.setItem('itemNumber',String(this.count));
    window.location.reload();
  }
}
