import { Observable, Subscription, take } from 'rxjs'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { AsyncPipe, NgIf } from '@angular/common'
import { AuthService } from './../../../../services/auth.service'

@Component({
  selector: 'profile-action-menu',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './profile-action-menu.component.html',
  styleUrl: './profile-action-menu.component.scss'
})
export class ProfileActionMenuComponent implements OnDestroy, OnInit {


  loggedInUser$!: Observable<any>

  constructor(
    private authService: AuthService
  ) { }

  loginSub!: Subscription
  signupSub!: Subscription
  logoutSub!: Subscription

  ngOnInit() {
    this.loggedInUser$ = this.authService.loggedInUser$
  }

  onLogin() {
    this.loginSub = this.authService.login(this._tempLoginCredentials()).pipe(
      take(1)
    ).subscribe()
  }

  onSignup() {
    this.signupSub = this.authService.signup(this._tempSignupCredentials()).pipe(
      take(1)
    ).subscribe()
  }

  onLogout() {
    this.logoutSub = this.authService.logout(this._tempLoginCredentials()).pipe(
      take(1)
    ).subscribe()
  }

  ngOnDestroy() {
    this.loginSub.unsubscribe()
    this.signupSub.unsubscribe()
    this.logoutSub.unsubscribe()
  }


  // private
  private _tempLoginCredentials() {
    return {
      "username": "Tommy",
      "password": "password",
    }
  }

  private _tempSignupCredentials() {
    return {
      "username": "Tommy",
      "password": "password",
      "fullname": "Tommy Verrcity"
    }
  }

}
