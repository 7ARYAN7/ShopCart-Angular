import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../service/user.service";
import {ProfileComponent} from "../profile.component";
import {User} from "../../../../model/user";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  model: any = {};
  user:User;
  userId = parseInt((window.localStorage.getItem('userId'))||'-1');

  constructor(private userService:UserService) { }

  ngOnInit(): void {
   this.getProfile();
  }
  getProfile(){
    this.userService.signup(this.userId).subscribe((response)=>{
      this.user=response;
    })
  }
   updateP(){

   }
}
