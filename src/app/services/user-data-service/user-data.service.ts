import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"; 
import { element } from 'protractor';
import { Observable } from "rxjs";
import { of } from "rxjs/Observable/of";
import 'rxjs/add/operator/map';

import { HandBookUser } from "../../objects/hand-book-user";

@Injectable()
export class UserDataService {

  private userDataURL = "http://localhost:8080/userdata";

  constructor(
    private http: HttpClient
  ) { }

  public saveUserData(data : HandBookUser)
  {
    let body = {
      apellido: data.lastName,
      correo: data.email,
      edad: data.age,
      id: data.userDataId,
      name: data.name
    }

    return this.http.post(this.userDataURL + "/updateDate", body);
  }

}
