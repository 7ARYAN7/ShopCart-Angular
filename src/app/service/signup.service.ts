import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Filter} from "../model/filter";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {User} from "../model/user";
import {SignupResponse} from "../model/signup-response";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private signupApiUrl = environment.signupUrl;

  constructor(private http: HttpClient) { }

  public signup(user:User):Observable<number>{
    return this.http.post<number>(`${this.signupApiUrl}`,user)
  }

}
