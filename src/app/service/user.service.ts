import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";
import {Profile} from "../model/profile";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userProfileUrl = environment.getUserUrl;
  private updateProfileUrl = environment.updateProfileUrl;
  constructor(private http: HttpClient) { }

  public signup(id:number):Observable<User>{
    return this.http.get<User>(`${this.userProfileUrl}/${id}`);
  }
  public updateP(profile:Profile):Observable<string>{
    return this.http.get<string>(`${this.updateProfileUrl}`);
  }

}
