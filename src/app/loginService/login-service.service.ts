import {Injectable, OnInit} from '@angular/core';
import {Users} from "../users";
import {HttpErrorResponse} from "@angular/common/http";
import {UsersService} from "../users.service";
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService implements OnInit {
  email = '';
  pass = '';
 temp='';
  //public users: Users;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
   // this.getProfile();

    this.login(this.email,this.pass);
  }

  // public getProfile(): void {
  //   this.userService.getUser().subscribe(
  //     (response: Users) => {
  //      console.log(response);
  //       this.users = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message + "hiiii 8999");
  //     }
  //   )
  // }

  // public login(email:string,password:string):void {
  //   console.log(email+"dddddddd");
  //  this.userService.login(email, password).subscribe(data=>{
  //    this.temp=data;
  //  })
  // }

  public login(email:string,password:string):void {
    console.log(email+"dddddddd");
    this.userService.login(email, password).subscribe(
      (response: string) => {
        this.email = response;
        console.log(response+"jijijijj");
      },
      (error: HttpErrorResponse) => {
        alert(error.message + "   hiiii 600");
      }
    )
  }
}
