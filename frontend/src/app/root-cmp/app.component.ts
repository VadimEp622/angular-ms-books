import { Component, OnDestroy, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Subscription, catchError, pipe } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from './../services/auth.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-ms-books'

  tokenLoginSub!: Subscription

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.tokenLoginSub = this.authService.loginByToken(this.cookieService.get('loginToken'))
      .subscribe()
  }

  ngOnDestroy(): void {
    this.tokenLoginSub.unsubscribe()
  }


  // TODO:
  //   1) make proper backend error handling + response codes + response objects (at least only for login/signup/logout atm)
  //   2) make proper frontend error handling (at least only for login/signup/logout atm)
  //   3) notify user about errors when trying to login/signup
  

  // TODO: consider making a dynamicCenteredModal component, for any future modal that needs to be centered in the middle of the screen, with a gray background
  //     along with it, make a dynamicCenteredModalService service, which will have an observable object, which will decided modal type + properties
  //     { modalType: string|null, properties?: any }  -> properties example: { modalType: 'login', properties: {isSignUp: boolean} } -> for toggling between login/signup modal


  // TODO: in app header, DESKTOP, change it up to have an upper header and lower header.
  //    - upper header: will have logo + search bar + user profile button, that on click will open menu
  //    - lower header: will have menu button, that will open a nav sidebar + book genres (maybe have "our favorites","top rated" etc)


  // TODO: in app header, MOBILE, will have a header search bar, and a footer nav for: home (meaning home + book route), user (user profile page), cart (cart page), + menu button
  //    - footer nav: 
  //         * home -> home route + book route 
  //         * user -> user profile route (header search bar will disappear, and instead be user profile button + alerts/notification button)
  //         * cart -> cart route
  //         * menu -> menu sidebar
}
