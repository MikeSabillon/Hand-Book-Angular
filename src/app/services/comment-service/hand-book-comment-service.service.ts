import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { of } from "rxjs/Observable/of";
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { element } from 'protractor';
import { HandBookComment } from "../../objects/hand-book-comment";
import { RequestOptions } from '@angular/http';


@Injectable()
export class HandBookCommentServiceService {

  private handBookCommentURL = "http://localhost:8080/comments"

  constructor(
    private http : HttpClient
  ) { }

  //Creates a comment on post
  public createComment(comment : HandBookComment): Observable<HandBookComment>
  {
    let body = {
      comment: comment.comment,
      commentPostId: comment.commentPostId,
      comment_id: comment.commentId,
      comment_likes: comment.commentLikes,
      userId: comment.commentUserId
    }
    return this.http.post<HandBookComment>(this.handBookCommentURL + "/createComment",  body);
  }

  public deleteCommentById(commentId : number)
  {
    return this.http.delete(this.handBookCommentURL + "/deleteComment=" + commentId);
  }

}
