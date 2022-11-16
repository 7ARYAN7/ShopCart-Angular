import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ProductListComponent} from "../../shopping-cart/product-list/product-list.component";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginComponent} from "../../login/login.component";

@Component({
  selector: 'app-navbar',
  providers:[LoginComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {}
  name:any;
  notLogged:boolean;
  doNotExists:boolean;
  constructor(private productService:ProductService,private router : Router,private login:LoginComponent) { }

  ngOnInit(): void {
    this.name= window.localStorage.getItem("name");
    this.notLogged =  this.isLogin();
    this.doNotExists = this.login.errorL
  }

  isLogin() {
    if (window.localStorage.getItem("userId") == null)
      return true;
    else return false;
  }
  logout(){
    window.localStorage.clear();
    window.location.reload();
  }
}
