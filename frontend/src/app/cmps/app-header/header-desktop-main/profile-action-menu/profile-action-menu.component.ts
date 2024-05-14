import { UserService } from './../../../../services/user.service';
import { Observable, Subscription, take } from 'rxjs'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { AuthService } from './../../../../services/auth.service'

@Component({
  selector: 'profile-action-menu',
  standalone: true,
  imports: [],
  templateUrl: './profile-action-menu.component.html',
  styleUrl: './profile-action-menu.component.scss'
})
export class ProfileActionMenuComponent implements OnDestroy {

  constructor(
    private authService: AuthService
  ) { }

  loginObs$!: Subscription
  signupObs$!: Subscription
  logoutObs$!: Subscription

  onLogin() {
    this.loginObs$ = this.authService.login(this._tempLoginCredentials()).pipe(
      take(1)
    ).subscribe()
  }

  onSignup() {
    this.signupObs$ = this.authService.signup(this._tempSignupCredentials()).pipe(
      take(1)
    ).subscribe()
  }

  onLogout() {
    this.logoutObs$ = this.authService.logout(this._tempLoginCredentials()).pipe(
      take(1)
    ).subscribe()
  }

  ngOnDestroy() {
    this.loginObs$.unsubscribe()
    this.signupObs$.unsubscribe()
    this.logoutObs$.unsubscribe()
  }


  _tempLoginCredentials() {
    return {
      "username": "Tommy",
      "password": "password",
    }
  }

  _tempSignupCredentials() {
    return {
      "username": "Tommy",
      "password": "password",
      "fullname": "Tommy Verrcity"
    }
  }

}
