import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HandBookUser } from '../../../objects/hand-book-user';
import { HandBookPostService } from "../../../services/post-service/hand-book-post.service";
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-dashboard-post',
  templateUrl: './dashboard-post.component.html',
  styleUrls: ['./dashboard-post.component.css']
})
export class DashboardPostComponent implements OnInit {

  @Input() private currentUser : HandBookUser;
  @Output() public onEvent : EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private handBookPostService : HandBookPostService
  ) { }

  ngOnInit() {
  }

  private postMessage(form : NgForm) : void
  {
    //console.log("User " + this.currentUser.userId + " has posted a message : " + form.value.userNewPost);

    this.handBookPostService.createUserPost(this.currentUser.userId, form.value.userNewPost).subscribe(
      (val)=>
      {
        //Success
        this.onEvent.emit();
        //console.log("POST call successful value returned a body", val);
      },
      response =>
      {
        //Error occured
        this.onEvent.emit();
        console.log("POST call in error", response);
      }
    );

    form.reset();

  }

}
