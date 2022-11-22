import {Component, ErrorHandler, OnInit} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {ProfileComponent} from "../profile.component";
import {User} from "../../../model/user";
import {Profile} from "../../../model/profile";
import {Address} from "../../../model/address";
import {HttpErrorResponse} from "@angular/common/http";

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
   let address = new Address(parseInt(this.model.pin),this.model.country,this.model.state,this.model.city);
     console.log(address)
     let profile = new Profile(this.userId,this.model.name,this.user.email,this.model.phone,address);
     this.userService.updateP(profile).subscribe((response)=>{
       console.log("saved");
     },(error:HttpErrorResponse)=>{
       alert(error.message);
     })
     if(this.model.name!=undefined)
     window.localStorage.setItem('name',this.model.name);
     window.location.href='/profile';
   }
}
