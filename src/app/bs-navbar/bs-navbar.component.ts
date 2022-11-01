import {Component, OnInit} from '@angular/core';
import {Users} from "../users";
import {HttpErrorResponse} from "@angular/common/http";
import {UsersService} from "../users.service";
import {LoginServiceService} from "../loginService/login-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginComponent} from "../login/login.component";
import {Login} from "../login";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  public useForm = FormData;
  temp='';
  constructor(private shared: UsersService) {
  }

  ngOnInit() {

  }

  something({data}: { data: any }) {
    this.shared.login(data.email, data.password).subscribe((data: string)=>{
      console.log(data+"jijijij");
      this.temp = data;
    });
     console.log(this.temp+"ghghhhhhh"+data.p);
  }

  loginForm = new FormGroup({
    "email": new FormControl('', Validators.required),
    "password": new FormControl('', Validators.required)
  })
}
