import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../model/product";
import {Observable} from "rxjs";
import {Filter} from "../model/filter";
import {AddProduct} from "../model/add-product";
import {UpdateProduct} from "../model/update-product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productApiUrl = environment.productUrl;

  constructor(private http: HttpClient) { }

  public getAllProduct():Observable<Product[]>{
      return this.http.get<Product[]>(`${this.productApiUrl}/getAllProducts`);

  }
  public searchProductByString(searchByString:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.productApiUrl}/search/${searchByString}`);
  }

  public findByFilter(filter:Filter,category:string):Observable<Product[]>{
    return this.http.post<Product[]>(`${this.productApiUrl}/${category}/getFilteredProducts`,filter);
  }
  public getProductByID(productId:number):Observable<Product>{
    return this.http.get<Product>(`${this.productApiUrl}/getById/${productId}`);
  }

  public addProduct(prod:AddProduct):Observable<Product>{
    return this.http.post<Product>(`${this.productApiUrl}/addProduct`,prod);
  }

  public modifyProduct(update:UpdateProduct):Observable<UpdateProduct>{
    return this.http.post<UpdateProduct>(`${this.productApiUrl}/update`,update);
  }
}
