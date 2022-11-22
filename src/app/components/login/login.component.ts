import { Component, OnInit } from '@angular/core';
import {Login} from "../../model/login";
import {LoginService} from "../../service/login.service";
import {LoginResponse} from "../../model/login-response";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {CartComponent} from "../shopping-cart/cart/cart.component";

@Component({
  selector: 'app-login',
  providers:[CartComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorL:boolean;
  model: any = {}
  loginR:LoginResponse;
  quant=0;
  constructor(private loginService : LoginService,private router :Router,private quantCart:CartComponent) { }

  ngOnInit() {
    this.quantCart.loadCart();
  }

  login() {
    let loginData = new Login(this.model.username, this.model.password);

    this.loginService.login(loginData).subscribe(
      (response) => {
        window.localStorage.clear();
        this.loginR = response;
        window.localStorage.setItem("userId",String(this.loginR.userId));
        window.localStorage.setItem("name",String(this.loginR.name));
        window.localStorage.setItem("role",String(this.loginR.role));
        window.location.href="/";
        this.errorL=false;
      },(error:HttpErrorResponse)=>{
        this.errorL = true;
      }
    )
  }
}
