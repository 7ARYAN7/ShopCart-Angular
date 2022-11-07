import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../../service/productService/product.service";
import {Product} from "../../../../model/product";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

 public product : Product | undefined ;
 public products : Product[] = [];

  @Input() productItem?: Product;

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.rNN();
  //this.getProductById();
  // this.getAllProducts();
  }

  // public getProductById() : void{
  //   this.productService.getProductById().subscribe(
  //     (response : Product) => {
  //       this.product = response;
  //     },
  //     (error : HttpErrorResponse) => {
  //       console.log(error.message);
  //     }
  //   )
  // }
  public rNN():void{
    console.log(this.productItem?.price+"hhihihi");
  }
}
