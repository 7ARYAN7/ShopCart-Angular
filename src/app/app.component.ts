import {Component, OnInit} from '@angular/core';
import {Users} from "./users";
import {UsersService} from "./users.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppingCart';
  public users: Users | undefined;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
   this.getProfile();
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
}
