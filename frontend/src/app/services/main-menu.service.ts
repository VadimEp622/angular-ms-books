import { Injectable } from '@angular/core'
import { NavigationEnd, NavigationSkipped, NavigationStart, Router } from '@angular/router'
import { BehaviorSubject, filter } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart || event instanceof NavigationEnd || event instanceof NavigationSkipped)
    ).subscribe(() => {
      this.setMenu(false)
    })
  }

  private _isMenuOpen$ = new BehaviorSubject<boolean>(false)
  public isMenuOpen$ = this._isMenuOpen$.asObservable()


  public toggleMenu(): void {
    this._isMenuOpen$.next(!this._isMenuOpen$.getValue())
  }

  public setMenu(value: boolean = false): void {
    this._isMenuOpen$.next(value)
  }
}
