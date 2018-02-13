import { Component, OnInit } from '@angular/core';
import { HandBookUserServiceService } from "../../services/user-service/hand-book-user-service.service";
import { HandBookUser } from "../../objects/hand-book-user";
import { Router } from '@angular/router';


@Component({
  selector: 'app-hand-book-login',
  templateUrl: './hand-book-login.component.html',
  styleUrls: ['./hand-book-login.component.css']
})
export class HandBookLoginComponent implements OnInit {

  public username : string;
  public password : string;

  private users : HandBookUser[];

  private loginError : boolean = false;

  constructor(
    private handBookUserService : HandBookUserServiceService,
    private router : Router  
  ) { }

  ngOnInit() {
    this.checkIfLogin();
    this.getRawUsers();
  }

  //Checks if user is logged in
  private checkIfLogin() : void 
  {
    if(localStorage.getItem("loggedInUser"))
    {
      this.router.navigate(["home/dashboard"]);
    }
    else
    {
      this.router.navigate(["login"]);
    }
  }

  //TODO: get rid of this later
  private getHandBookUsers() : void
  {
    this.handBookUserService.getUsers().subscribe((response: HandBookUser[]) =>{
      this.users = response;
      console.log(this.users);
    });
  }

  //TODO: get rid of this later
  private getRawUsers() : void
  {
    this.handBookUserService.getRawUserData().subscribe(
      (response: any) => {
        console.log(response);
      });
  }

  //Navigates user to register page
  public goToRegisterPage() : void
  {
    this.router.navigate(["register"]);
  }

  //Checks if player can log in
  public checkIfCanLogin() : void
  {
    this.handBookUserService.loginAuthen(this.username,this.password)
    .subscribe(
      (response : boolean) => 
      {
        let hasLogin : boolean = response;
        console.log("Has login: " + hasLogin);

        if(hasLogin)
        {
          this.loginError = false;

          this.handBookUserService.getUserByUsername(this.username).subscribe(
            (response : HandBookUser) => 
            {
              localStorage.setItem("loggedInUser", JSON.stringify(response));
              this.router.navigate(["home/dashboard"]);
            }
          );
        }
        else
        {
          this.loginError = true;
        }
      }
    );
  }

}
