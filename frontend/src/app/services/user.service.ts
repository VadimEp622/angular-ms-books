import { Injectable } from '@angular/core'
import { BehaviorSubject, tap } from 'rxjs'
import { AuthService } from './auth.service'

const ENTITY = 'user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authService: AuthService
  ) { }

  // TODO: make a currentLoggedInUser observable, with which auth functions (login/signup/logout) will be able to communicate with.
  // TODO: consider moving loggedInUser$ obs to auth service (prevents confusing duplication of login/onLogin)

  // INFO: login/signup/logout WORK with backend DB!




  private _loggedInUser$ = new BehaviorSubject<any | null>(null) // todo: change any with User model
  public loggedInUser$ = this._loggedInUser$.asObservable()



  public onLogin(credentials: any) {
    return this.authService.login(credentials)
      .pipe(
        tap(res => {
          console.log('frontend login res', res)
        })
      )
  }

  public onSignup(credentials: any) {
    return this.authService.signup(credentials)
      .pipe(
        tap(res => {
          console.log('frontend signup res', res)
        })
      )
  }

  public onLogout(credentials: any) {
    return this.authService.logout(credentials)
      .pipe(
        tap(res => {
          console.log('frontend logout res', res)
        })
      )
  }





  // ------------------ Private Functions ------------------

}
