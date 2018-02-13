import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HandBookUserServiceService   } from "../../services/user-service/hand-book-user-service.service"
import { HandBookUser } from '../../objects/hand-book-user';
import { HandBookPost } from '../../objects/hand-book-post';
import { SessionUserUtilModule } from '../../sessionUtility/session-user-util.module';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { UserDataService } from '../../services/user-data-service/user-data.service';

import { OnChanges } from '@angular/core';
import { HandBookHomeComponent } from '../hand-book-home/hand-book-home.component';

@Component({
  selector: 'app-hand-book-user-profile',
  templateUrl: './hand-book-user-profile.component.html',
  styleUrls: ['./hand-book-user-profile.component.css']
})

export class HandBookUserProfileComponent implements OnInit {

  private loggedInUser : HandBookUser;
  private isEditing : boolean = false;

  private name : string;
  private lastName : string;
  private userAge : number;
  private email : string;

  private errorMessage : string;

  private errorSubmit : boolean = false;

  constructor(
    private handBookUserService: HandBookUserServiceService,
    private userDataService : UserDataService,
    private homeComponent : HandBookHomeComponent
  ) { }

  ngOnInit() {
    this.loggedInUser = SessionUserUtilModule.getCurrentLoggedInUser();
  }

  private editInfo() : void
  {
    this.errorSubmit = false;
    this.isEditing = !this.isEditing;

    this.name = this.loggedInUser.name;
    this.lastName = this.loggedInUser.lastName;
    this.email = this.loggedInUser.email;
    this.userAge = this.loggedInUser.age;
  }

  private saveInfo() : void
  {
    let canSave : boolean = false;

    if(this.email.includes("gmail") || this.email.includes("hotmail") || this.email.includes("yahoo"))
    {
      console.log("Can Create");

      let tempUser : HandBookUser = SessionUserUtilModule.getCurrentLoggedInUser();
      tempUser.name = this.name;
      tempUser.lastName = this.lastName;
      tempUser.email = this.email;
      tempUser.age = this.userAge;

      this.userDataService.saveUserData(tempUser).subscribe(
        (val) =>
        {
          console.log("POST call successful value returned a body", val);
          
          this.errorSubmit = false;
          this.homeComponent.updateLoggedInUserData();
          this.loggedInUser = tempUser;

          this.editInfo();
        },
        response =>
        {
          console.log("POST call in error", response);
          this.errorSubmit = true;
          this.editInfo();
        }
      );
    }
    else
    {
      this.errorSubmit = true;
      this.errorMessage = "Not a valid email, please enter a valid email.";
      return;
    }
  }

  //Gets logged in user by param id
  /*private getLoggedInUser() : void
  {
    let userId = +this.route.snapshot.paramMap.get("id");
    
    this.handBookUserService.getUserById(userId).subscribe(
      (res : HandBookUser) =>
      {
        this.loggedInUser = res;
        console.log(this.loggedInUser);
      },
      error =>
      {
        console.log("Could not find that user by id: " + userId);
      }
    )
  }*/

}
