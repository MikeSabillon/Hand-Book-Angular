import { Injectable } from '@angular/core';
import { HandBookUser } from "../../objects/hand-book-user";
import { Observable } from "rxjs";
import { of } from "rxjs/Observable/of";
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { element } from 'protractor';

@Injectable()
export class HandBookUserServiceService {

  private handBookUsersURL = "http://localhost:8080/users";

  constructor(private http: HttpClient) { }

  //Creates new user with username and password
  public createUser(user : string, pass : string)
  {
    return this.http.post(this.handBookUsersURL + "/name=" + user + "/pass=" + pass, "");
  }

  //Checks if user exists and can login, returns boolean to confirm
  public loginAuthen (username: String, password: String)
  {
    return this.http.get(this.handBookUsersURL + "/login/user=" + username + "/pass=" + password);
  }

  //Returns hand book user by username
  public getUserByUsername(username : String)
  {
    return this.http.get(this.handBookUsersURL + "/user=" + username);
  }

  //Returns hand book user data by id
  public getUserById(id : number)
  {
    return this.http.get(this.handBookUsersURL + "/user?id=" + id);
  }

  //Returns list of all hand book users
  public getUsers() : Observable<HandBookUser[]>
  {
    console.log("Getting all hand book users");

    return this.http.get(this.handBookUsersURL)
    .map((res: HandBookUser[]) => {
      let results : HandBookUser[] = [];
      res.forEach(element => {
        results.push(HandBookUser.createUserFromJson(element))
      });

      return results;
    });
  }

  //Returns all hand book users raw data
  public getRawUserData()
  {
    console.log("Getting all raw user data");
    
    return this.http.get(this.handBookUsersURL);
  }

}
