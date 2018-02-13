import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HandBookUserServiceService } from "../app/services/user-service/hand-book-user-service.service";
import { HandBookPostService } from "../app/services/post-service/hand-book-post.service";

import { HandBookLoginComponent } from './components/hand-book-login/hand-book-login.component';
import { HandBookDashboardComponent } from './components/hand-book-dashboard/hand-book-dashboard.component';
import { HandBookUserProfileComponent } from './components/hand-book-user-profile/hand-book-user-profile.component';
import { HandBookNavBarComponent } from './components/hand-book-nav-bar/hand-book-nav-bar.component';
import { HandBookUserPostsComponent } from './components/hand-book-user-posts/hand-book-user-posts.component';
import { HandBookRegisterComponent } from './components/hand-book-register/hand-book-register.component';
import { HandBookHomeComponent } from './components/hand-book-home/hand-book-home.component';
import { DashboardPostComponent } from './components/hand-book-dashboard/dashboard-post/dashboard-post.component';

import { AppRoutingModule } from './/app-routing.module';
import { AuthguardGuard } from "./guards/authguard.guard";
import { SessionUserUtilModule } from './sessionUtility/session-user-util.module';
import { DashboardUserPostsComponent } from './components/hand-book-dashboard/dashboard-user-posts/dashboard-user-posts.component';
import { HandBookCommentServiceService } from './services/comment-service/hand-book-comment-service.service';
import { UserDataService } from './services/user-data-service/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HandBookLoginComponent,
    HandBookDashboardComponent,
    HandBookUserProfileComponent,
    HandBookNavBarComponent,
    HandBookUserPostsComponent,
    HandBookRegisterComponent,
    HandBookHomeComponent,
    DashboardPostComponent,
    DashboardUserPostsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SessionUserUtilModule
  ],
  providers: [HttpClient , UserDataService , HandBookCommentServiceService , HandBookUserServiceService , HandBookPostService , AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
