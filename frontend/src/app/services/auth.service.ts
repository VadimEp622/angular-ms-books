import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, tap } from 'rxjs'
import { environment } from '../../environments/environment'


const ENTITY = 'auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.api_url + ENTITY

  private _loggedInUser$ = new BehaviorSubject<any | null>(null) // TODO: change any with User model
  public loggedInUser$ = this._loggedInUser$.asObservable()

  constructor(
    private http: HttpClient
  ) { }


  // INFO: for cookies, add { withCredentials: true } to the request


  public login(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials, { withCredentials: true })
      .pipe(
        tap(res => this._loggedInUser$.next(res))
      )
  }

  public signup(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/signup`, credentials, { withCredentials: true })
      .pipe(
        tap(res => this._loggedInUser$.next(res))
      )
  }

  public logout(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/logout`, credentials, { withCredentials: true })
      .pipe(
        tap(() => this._loggedInUser$.next(null))
      )
  }
}
