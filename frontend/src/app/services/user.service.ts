import { Injectable } from '@angular/core'


const ENTITY = 'user'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(

  ) { }

  // TODO: make a currentLoggedInUser observable, with which auth functions (login/signup/logout) will be able to communicate with.
  // TODO: consider moving loggedInUser$ obs to auth service (prevents confusing duplication of login/onLogin)

  // INFO: login/signup/logout WORK with backend DB!








  // ------------------ Private Functions ------------------

}
