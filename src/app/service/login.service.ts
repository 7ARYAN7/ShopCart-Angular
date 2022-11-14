import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Login} from "../model/login";
import {Observable} from "rxjs";
import {LoginResponse} from "../model/login-response";
import {User} from "../model/user";
import {SignupResponse} from "../model/signup-response";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginApiUrl = environment.loginUrl;

  constructor(private http: HttpClient) { }

   public login(login:Login){
    return this.http.post<LoginResponse>(`${this.loginApiUrl}`,login)
   }

  public signUp(user:User){
    return this.http.post<SignupResponse>(`${this.loginApiUrl}`,user)
  }
}
