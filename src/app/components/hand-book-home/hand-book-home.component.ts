import { Component, OnInit } from '@angular/core';
import { HandBookUser } from '../../objects/hand-book-user';
import { HandBookUserServiceService } from "../../services/user-service/hand-book-user-service.service";
import { SessionUserUtilModule } from '../../sessionUtility/session-user-util.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hand-book-home',
  templateUrl: './hand-book-home.component.html',
  styleUrls: ['./hand-book-home.component.css']
})
export class HandBookHomeComponent implements OnInit {

  public loggedInUser : HandBookUser;

  constructor(
    private handBookUserService : HandBookUserServiceService,
    private router : Router  
  ) { }

  ngOnInit() {
    //Gets logged in user
    this.getLoggedInUser();
  }

  //Gets User for component use
  private getLoggedInUser() : void
  {
    this.loggedInUser = SessionUserUtilModule.getCurrentLoggedInUser();
    this.updateLoggedInUserData();
  }

  //Updates and sets the current logged in user if the is any
  public updateLoggedInUserData() : void 
  {
    if(localStorage.getItem("loggedInUser") != null)
    {
      this.handBookUserService.getUserById(SessionUserUtilModule.getCurrentLoggedInUser().userId).subscribe(
        (res : HandBookUser) =>
        {
          SessionUserUtilModule.updateCurrentLoggedInUser(res);
          this.loggedInUser = SessionUserUtilModule.getCurrentLoggedInUser();
        },
        response =>
        {
          console.log("POST call in error", response);
          SessionUserUtilModule.clearCurrentLoggedInUser();
          this.router.navigate(["/login"]);
        }
      )
    }
  }

}
