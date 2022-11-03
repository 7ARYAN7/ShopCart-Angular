import { Component, OnInit } from '@angular/core';
import {Users} from "../users";
import {HttpErrorResponse} from "@angular/common/http";
import {UsersService} from "../users.service";
import {Product} from "../product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: Users | undefined;
  public product: Product | undefined;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getProfile();
    this.getProductId();
  }
  public getProfile(): void {
    this.userService.getUser().subscribe(
      (response: Users) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  public getProductId(): void{
    this.userService.getProductId().subscribe(
      (response:Product)=>{
        this.product = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message+"bbb");
      }
    )
  }
}
