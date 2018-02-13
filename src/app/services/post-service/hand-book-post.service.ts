import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { of } from "rxjs/Observable/of";
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { element } from 'protractor';

import { HandBookComment } from "../../objects/hand-book-comment";
import { HandBookPost } from "../../objects/hand-book-post";
import { HandBookUserServiceService } from '../user-service/hand-book-user-service.service';
import { HandBookUser } from '../../objects/hand-book-user';

@Injectable()
export class HandBookPostService {

  private handBookPostsURL = "http://localhost:8080/usersPosts";

  constructor(
    private http : HttpClient,
    private handBookUserService : HandBookUserServiceService
  ) { }

  //Return all user posts
  public getUserPosts(userId : number) : Observable<HandBookPost[]>
  {
    return this.http.get(this.handBookPostsURL + "/userPosts?id=" + userId).map(
      (res : HandBookPost[]) =>
      {
        let results : HandBookPost[] = [];
        
        //Getting posts
        res.forEach(element => {
          results.push(HandBookPost.createPostFromJson(element));
        });

        return results;
      });
  }

  //Upadtes post likes of post
  public likePost(userId : number, postId : number)
  {
    return this.http.post(this.handBookPostsURL + "/likePost=" + postId + "/user=" + userId, "");
  }

  //Returns all users posts
  public getAllUserPosts() : Observable<HandBookPost[]>
  {
    //console.log("Getting all posts");

    return this.http.get(this.handBookPostsURL).map(
      (res : HandBookPost[]) =>
      {
        let results : HandBookPost[] = [];

        //Getting posts
        res.forEach(element => {
          results.push(HandBookPost.createPostFromJson(element));
        });

        return results;
      });
  }

  //Creates a post 
  public createUserPost(userId : number, userPostContent : string)
  {
    return this.http.post(this.handBookPostsURL + "/content=" + userPostContent +"/from=" + userId, {content: userPostContent, from: userId});
  }

  public removePostById(postId : number)
  {
    return this.http.delete(this.handBookPostsURL + "/removePost=" + postId);
  }

}
