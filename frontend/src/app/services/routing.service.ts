import { Injectable } from '@angular/core'
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private _isRouteLoading$ = new BehaviorSubject<boolean>(false)
  public isRouteLoading$ = this._isRouteLoading$.asObservable()


  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this._isRouteLoading$.next(true)
          break
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this._isRouteLoading$.next(false)
          break
        }

        default: {
          break
        }
      }
    })
  }

}
