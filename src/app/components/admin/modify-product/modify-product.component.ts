import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {UpdateProduct} from "../../../model/update-product";
import {workspaceSchemaPath} from "@angular/cli/src/utilities/config";

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  model: any = {};

  productId:number;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productId = parseInt(window.localStorage.getItem('modifyProductId')||'-1');
  }
 modifyProd(){
    let update = new UpdateProduct(this.productId,this.model.product_name,this.model.price,this.model.details,this.model.image,this.model.categoryL)
    this.productService.modifyProduct(update).subscribe((response)=>{
      console.log(response);
    })
   window.location.href='';
 }
}
