import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {Address} from "../../model/address";
import {SignupService} from "../../service/signup.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

// function passwordsMatchValidator({form}: { form: any | undefined}) {
//   const password = form.password
//   const confirmPassword = form.confirmPassword
//
//   if (password.value !== confirmPassword.value) {
//     confirmPassword.setErrors({passwordsMatch: true})
//   } else {
//     confirmPassword.setErrors(null)
//   }
//
//   return null
// }
//
// function symbolValidator({control}: { control: any |undefined}) { //control = registerForm.get('password')
//   if (control.hasError('required')) return null;
//   if (control.hasError('minlength')) return null;
//
//   if (control.value.indexOf('@') > -1) {
//     return null
//   } else {
//     return {symbol: true}
//   }
// }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private signupService:SignupService, private router : Router,private fb: FormBuilder) {
  }
  form: FormGroup = new FormGroup({
    //name : new FormControl('',[Validators.pattern('[0-9]+')])
  });
  ngOnInit() {
  }

  register() {
    let add = new Address(parseInt(this.model.pin),this.model.country,this.model.state,this.model.city);
    let user = new User(this.model.name,this.model.email,this.model.password,parseInt(this.model.phone),add);
    this.signupService.signup(user).subscribe((response : number)=>{
      window.localStorage.setItem("userId",response.toString());
      window.localStorage.setItem("name",user.name.toString());
      window.localStorage.setItem('role','user');
      window.location.href ='/';
      },(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )

  }

}

