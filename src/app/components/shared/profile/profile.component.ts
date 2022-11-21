import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = window?.localStorage?.getItem('name')?.toUpperCase();
  userId = parseInt((window.localStorage.getItem('userId'))||'-1');
  user:User;
  email:String;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getProfile();
    this.email = this.user.email;
  }

  getProfile(){
    this.userService.signup(this.userId).subscribe((response)=>{
      this.user=response;
    })
  }
}
