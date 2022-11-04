import { Component, OnInit } from '@angular/core';
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

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  this.getProductById();
  }

  public getProductById() : void{
    this.productService.getProductById().subscribe(
      (response : Product) => {
        this.product = response;
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }
}
