import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/productService/product.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getAllProduct().subscribe((products) => {
      this.productList = products;
    })
  }
}
