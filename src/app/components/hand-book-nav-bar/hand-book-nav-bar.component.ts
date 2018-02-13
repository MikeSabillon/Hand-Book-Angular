import { Component, OnInit, Input } from '@angular/core';
import { HandBookUser } from "../../objects/hand-book-user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-hand-book-nav-bar',
  templateUrl: './hand-book-nav-bar.component.html',
  styleUrls: ['./hand-book-nav-bar.component.css']
})
export class HandBookNavBarComponent implements OnInit {

  @Input() loggedInUser : HandBookUser;

  constructor(private router : Router) { }

  ngOnInit() {
    
  }

  public logOutUser() : void 
  {
    this.router.navigate(["login"]);
    localStorage.removeItem("loggedInUser");
  }

}
