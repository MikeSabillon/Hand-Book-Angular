import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HandBookPost } from '../../objects/hand-book-post';
import { HandBookPostService } from "../../services/post-service/hand-book-post.service";
import { HandBookUser } from '../../objects/hand-book-user';
import { Observable } from 'rxjs/Observable';

import { SessionUserUtilModule } from '../../sessionUtility/session-user-util.module';

@Component({
  selector: 'app-hand-book-user-posts',
  templateUrl: './hand-book-user-posts.component.html',
  styleUrls: ['./hand-book-user-posts.component.css']
})
export class HandBookUserPostsComponent implements OnInit {

  private currentUser : HandBookUser;
  @Input() private userPosts : Array<HandBookPost> = [];
  private currentPage : number = 1;
  private postLimit : number = 5;

  constructor(
    private handBookPostService : HandBookPostService
  ) { }

  ngOnInit() {
    this.currentUser = SessionUserUtilModule.getCurrentLoggedInUser();
    this.getAllPosts();
  }

  private getAllPosts() : void
  {
    this.handBookPostService.getUserPosts(this.currentUser.userId).subscribe((res : HandBookPost[]) =>{
      this.userPosts = res;
    });
  }

}
