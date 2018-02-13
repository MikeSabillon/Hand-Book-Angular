import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { HandBookLoginComponent } from "../app/components/hand-book-login/hand-book-login.component";
import { HandBookNavBarComponent } from "../app/components/hand-book-nav-bar/hand-book-nav-bar.component";
import { HandBookDashboardComponent } from "../app/components/hand-book-dashboard/hand-book-dashboard.component";
import { HandBookUserProfileComponent } from "../app/components/hand-book-user-profile/hand-book-user-profile.component";
import { HandBookUserPostsComponent } from "../app/components/hand-book-user-posts/hand-book-user-posts.component";
import { HandBookRegisterComponent } from './components/hand-book-register/hand-book-register.component';
import { HandBookHomeComponent } from './components/hand-book-home/hand-book-home.component';

import { AuthguardGuard } from "../app/guards/authguard.guard";

const routes : Routes = [
  {
    path : "login",
    component: HandBookLoginComponent
  },
  {
    path : "register",
    component: HandBookRegisterComponent
  },
  {
    path : "home",
    component: HandBookHomeComponent,
    canActivate: [AuthguardGuard],
    children: 
    [
      {path: "dashboard", component: HandBookDashboardComponent},
      {path: "profile/:id", component: HandBookUserProfileComponent},
      {path: "profile", component: HandBookUserProfileComponent},
      {path: "posts", component: HandBookUserPostsComponent},
      {path: "", redirectTo : "dashboard", pathMatch: "full"}
    ]
  },
  {
    path : "",
    redirectTo: "home/dashboard",
    pathMatch: "full"
  },
  {
    path : "**",
    redirectTo: "/login"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
