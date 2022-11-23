import { Component, OnInit } from '@angular/core';
import {AddProduct} from "../../../model/add-product";
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  model: any = {};

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  productAdd(){
    let prod = new AddProduct(this.model.product_name,this.model.price,this.model.details,this.model.image,this.model.categoryL);
    this.productService.addProduct(prod).subscribe((response)=>{
      console.log(response);
    })
    window.location.href='/';
  }
}
