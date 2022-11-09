import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productApiUrl = environment.productUrl;

  constructor(private http: HttpClient) { }

  public getProductById() : Observable<Product>{
    return this.http.get<Product>(`${this.productApiUrl}/getById/1`);
  }
  public getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.productApiUrl}/getAllProducts`)
  }
}
