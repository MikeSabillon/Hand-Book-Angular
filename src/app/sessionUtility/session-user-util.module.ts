import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandBookUser } from "../objects/hand-book-user";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SessionUserUtilModule { 

  //Gets current logged in user
  public static getCurrentLoggedInUser() : HandBookUser
  {
    return HandBookUser.createUserFromJson(JSON.parse(localStorage.getItem("loggedInUser")));
  }

  //Updates current logged in user
  public static updateCurrentLoggedInUser(updatedUser : HandBookUser) : void
  {
    localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
  }

  //Removes current logged in user
  public static clearCurrentLoggedInUser() : void 
  {
    localStorage.removeItem("loggedInUser");
  }

}
