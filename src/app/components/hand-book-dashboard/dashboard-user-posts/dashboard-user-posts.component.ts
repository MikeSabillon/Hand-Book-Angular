import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HandBookPostService } from "../../../services/post-service/hand-book-post.service";
import { HandBookPost } from '../../../objects/hand-book-post';

import { HandBookCommentServiceService } from "../../../services/comment-service/hand-book-comment-service.service";
import { HandBookComment } from '../../../objects/hand-book-comment';
import { HandBookUser } from '../../../objects/hand-book-user';
import { SessionUserUtilModule } from '../../../sessionUtility/session-user-util.module';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-dashboard-user-posts',
  templateUrl: './dashboard-user-posts.component.html',
  styleUrls: ['./dashboard-user-posts.component.css']
})
export class DashboardUserPostsComponent implements OnInit {

  @Output() public onEvent : EventEmitter<void> = new EventEmitter<void>();
  @Input() private posts : Array<HandBookPost> = [];
  private postLimit : number = 5;

  private loggedInUser : HandBookUser;

  constructor(
    private handBookPostService : HandBookPostService,
    private handBookCommentService : HandBookCommentServiceService,
  ) { }

  ngOnInit() {
    this.loggedInUser = SessionUserUtilModule.getCurrentLoggedInUser();
  }

  private showMorePosts() : void
  {
    this.postLimit = this.postLimit + 5;
  }

  private likePost(postIndex : number) : void
  {
    //console.log("Like post: " + this.posts[postIndex].postId);
    
    this.handBookPostService.likePost(this.loggedInUser.userId, this.posts[postIndex].postId).subscribe(
      (val : HandBookPost) =>
      {
        this.posts[postIndex] = HandBookPost.createPostFromJson(val);
        //console.log("POST call successful value returned a body", val);
      },
      response =>
      {
        console.log("POST call in error", response);
      }
    );
  }

  private checkForLike(post : HandBookPost) : boolean
  {
    for(let a = 0; a < post.postUserLikes.length; a++)
    {
      if(this.loggedInUser.userId == post.postUserLikes[a])
      {
        return true;
      }
    }
    return false;
  }

  private removePost(postId : number) : void
  {
    this.handBookPostService.removePostById(postId).subscribe(
      (val) =>
      {
        //console.log("POST call successful value returned a body", val);
        this.onEvent.emit();
      },
      response =>
      {
        console.log("POST call in error", response);
        this.onEvent.emit();
      }
    )
  }

  private removeComment(comment : HandBookComment, postIndex : number, commentIndex: number) : void
  {
    this.handBookCommentService.deleteCommentById(comment.commentId).subscribe(
      (val) => 
      {
        //console.log("POST call successful value returned a body", val);
        this.posts[postIndex].postComments.splice(commentIndex, 1);
      },
      response =>
      {
        console.log("POST call in error", response);
      }
    );
  }

  private createComment(form : NgForm, postId: number, index: number) : void
  {
    let newComment : HandBookComment = new HandBookComment(null,this.loggedInUser.userId,form.value.commentInput,0,this.loggedInUser.name + " " + this.loggedInUser.lastName,postId);

    this.handBookCommentService.createComment(newComment).subscribe(
      (val) =>
      {
        //console.log("POST call successful value returned a body", val);
        newComment.commentId = HandBookComment.createCommentFromJson(val).commentId;
        this.posts[index].postComments.push(newComment);
      },
      response =>
      {
        console.log("POST call in error", response);
      }
    )

    form.reset();
  }

}
