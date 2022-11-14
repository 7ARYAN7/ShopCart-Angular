import { Component, OnInit } from '@angular/core';
import {Login} from "../../model/login";
import {LoginService} from "../../service/login.service";
import {LoginResponse} from "../../model/login-response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}
  loginR:LoginResponse;

  constructor(private loginService : LoginService,private router :Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model)

    let loginData = new Login(this.model.username, this.model.password);

    this.loginService.login(loginData).subscribe(
      (response) => {
        window.localStorage.clear();
        this.loginR = response;
        window.localStorage.setItem("userId",String(this.loginR.userId));
        window.localStorage.setItem("name",String(this.loginR.result));
        window.location.href="/";
      }
    )
  }
}
