import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor() { }

  private _isMenuOpen$ = new BehaviorSubject<boolean>(false)
  public isMenuOpen$ = this._isMenuOpen$.asObservable()



  public toggleMenu(): void {
    this._isMenuOpen$.next(!this._isMenuOpen$.getValue())
  }
}
