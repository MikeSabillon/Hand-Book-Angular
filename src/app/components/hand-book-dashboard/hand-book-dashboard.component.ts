import { Component, OnInit, Input } from '@angular/core';
import { HandBookPost } from '../../objects/hand-book-post';
import { HandBookPostService } from "../../services/post-service/hand-book-post.service";
import { HandBookUser } from '../../objects/hand-book-user';
import { Observable } from 'rxjs/Observable';

import { SessionUserUtilModule } from '../../sessionUtility/session-user-util.module';
import { HandBookUserServiceService } from '../../services/user-service/hand-book-user-service.service';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';

@Component({
  selector: 'app-hand-book-dashboard',
  templateUrl: './hand-book-dashboard.component.html',
  styleUrls: ['./hand-book-dashboard.component.css']
})
export class HandBookDashboardComponent implements OnInit {

  private currentUser : HandBookUser;
  private allUserPosts : Array<HandBookPost> = [];

  constructor(
    private handBookPostService : HandBookPostService,
    private handBookUserService : HandBookUserServiceService
  ) { }

  ngOnInit() {
    this.getLoggedInuser();
    this.getAllPosts();
  }

  private getLoggedInuser() : void
  {
    this.currentUser = SessionUserUtilModule.getCurrentLoggedInUser();
  }

  private getAllPosts() : void
  {
    this.handBookPostService.getAllUserPosts().subscribe((res : HandBookPost[]) =>{
      this.allUserPosts = res;
      //console.log(this.allUserPosts);
    });
  }

}
