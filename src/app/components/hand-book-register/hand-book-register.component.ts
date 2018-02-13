import { Component, OnInit } from '@angular/core';
import { HandBookUserServiceService } from "../../services/user-service/hand-book-user-service.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-hand-book-register',
  templateUrl: './hand-book-register.component.html',
  styleUrls: ['./hand-book-register.component.css']
})
export class HandBookRegisterComponent implements OnInit {

  private wasCreated : boolean = false;
  private errorOcurred : boolean = false;

  private successMessage : string;
  private errorMessage : string

  constructor(
    private handBookUserService: HandBookUserServiceService,
    private location : Location
  ) { }

  ngOnInit() { }

  //Registers a user
  public registerUser(form : NgForm) : void
  {
    this.errorOcurred = false;
    this.wasCreated = false;

    console.log("Username: " + form.value.username + " | " + "Password: " + form.value.password);
    console.log("Can create new user: " + form.valid )
    console.log("Creating user...");

    if(form.valid)
    {
      this.handBookUserService.createUser(form.value.username, form.value.password).subscribe(
        (val) =>
        {
          this.wasCreated = true;
          this.successMessage = "Username: " + form.value.username + " was created successfully!!";
          console.log("POST call successful value returned a body", val);
        },
        response =>
        {
          this.wasCreated = false;
          this.errorMessage = "Error ocurred, please check your internet connection or contact a handbook developer."
          console.log("POST call in error", response);
        }
      );
    }
    
  }

  //Goes back to login screen if logged in
  public goBack() : void 
  {
    this.location.back();
  }

}
