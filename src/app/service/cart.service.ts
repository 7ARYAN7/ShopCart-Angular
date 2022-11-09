import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {Cart} from "../model/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartApiUrl = environment.cartUrl;
  constructor(private http: HttpClient) { }

  public getCart(cartId:number):Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.cartApiUrl}/${cartId}/getCart`);
  }
  public addToCart(userId:number, productId:number|undefined){
    return this.http.get<any>(`${this.cartApiUrl}/${userId}/add/${productId}`);
  }
  public reduceQ(userId:number, productId:number|undefined){
    return this.http.get<any>(`${this.cartApiUrl}/${userId}/reduceQuantity/${productId}`);
  }
  public removeP(userId:number, productId:number|undefined){
    return this.http.get<any>(`${this.cartApiUrl}/${userId}/remove/${productId}`);
  }
}
