import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "./users";
import {environment} from "../environments/environment";
import {Login} from "./login";
import {Product} from "./product";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
private apiServerUrl = environment.apiBaseUrl;
  constructor(private http : HttpClient) { }

  public getUser(): Observable<Users>{
    return this.http.get<Users>(`${this.apiServerUrl}/getProfile/1`);
  }
  // public login({email:string,password:string}:Observable<Users>{
  //   return this.http.post<Users>(`${this.apiServerUrl}/login`,email,password);
  // }

  public login(email:string,password:string):any{
    console.log("ggggggg");
    const login:Login={email:email,password:password}
    return this.http.post<string>(`${this.apiServerUrl}/login`,login);
  }
  public getProductId():Observable<Product>{
    let product = this.http.get<Product>(`${this.apiServerUrl}/products/getById/1`);
    console.log(product+"uhuhuhuh");
    return product;
  }
}
