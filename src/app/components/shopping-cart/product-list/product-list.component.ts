import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";
import {Filter} from "../../../model/filter";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  search:string;
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
    if(this.model.search==='')
      this.loadProducts();
    else {
      this.productService.searchProductByString(this.model.search).subscribe((products) => {
        this.productList = products;
      })
    }
  }

  loadFilteredProducts(filter: Filter, category: string){
    this.productService.findByFilter(filter,category).subscribe((products)=>{
      this.productList= products;
      console.log(this.productList[0].name);

    })
  }
}
