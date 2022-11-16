import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";
import {Filter} from "../../../model/filter";
import {LabelType, Options} from "ng5-slider";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  search:string;
  productNF : boolean;
  model: any = {};
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadProducts();

  }

  loadProducts() {
      this.productService.getAllProduct().subscribe((products) => {
        this.productList = products;
      })
  }
  searcH(){
    this.productNF= false;
    if(this.model.search ==='' || this.model.search=== undefined) {
      this.loadProducts();
    }
    else {
      this.productService.searchProductByString(this.model.search).subscribe((products) => {
        this.productList = products;
      })
    }
  }

  loadFilteredProducts(filter: Filter, category: string){

  }
  minValue: number = 50000;
  maxValue: number = 250000;
  options: Options = {
    floor: 0,
    ceil: 300000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min Price:</b> ₹' + value;
        case LabelType.High:
          return '<b>Max Price:</b> ₹' + value;
        default:
          return '₹' + value;
      }
    }
  };

  filterby(){
    console.log(this.model.categoryL)
    let filter = new Filter(this.minValue.toString(),this.maxValue.toString(),this.model.subcategory,this.model.brand)
    this.productService.findByFilter(filter,this.model.categoryL).subscribe((products)=>{
      this.productList= products;
      this.productNF = false;
      console.log(this.productList[0].name);
    },(error:HttpErrorResponse)=>{
      this.productNF = true;
      }
      )
  }
}
