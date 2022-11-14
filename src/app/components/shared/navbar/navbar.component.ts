import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {ProductListComponent} from "../../shopping-cart/product-list/product-list.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {}
  name:any;
  notLogged:boolean;
  constructor(private productService:ProductService,private router : Router) { }

  ngOnInit(): void {
    this.name= window.localStorage.getItem("name");
   this.notLogged =  this.isLogin();
  }

 searchByString(){
    this.productService.setString(this.model.search);
   window.location.href="/";
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
