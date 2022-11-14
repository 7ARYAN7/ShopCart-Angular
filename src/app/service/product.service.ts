import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchByString : string;

  private productApiUrl = environment.productUrl;

  constructor(private http: HttpClient) { }

  setString(s:string){
    this.searchByString=s;
    console.log("seear")
  }

  public getAllProduct():Observable<Product[]>{
    if(this.searchByString=== null || this.searchByString===undefined) {
      console.log(this.searchByString+"bjhbj")
      return this.http.get<Product[]>(`${this.productApiUrl}/getAllProducts`);
    }
    else {
      console.log(this.searchByString+"gftggg");
      return this.http.get<Product[]>(`${this.productApiUrl}/search/${this.searchByString}`);

    }
  }
}
