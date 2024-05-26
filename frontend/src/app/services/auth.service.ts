import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs'
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

  public loginUsingCookie(token: string) {
    return this.http.post<any>(`${this.baseUrl}/token-login`, { token }, { withCredentials: true })
      .pipe(
        tap(res => this._loggedInUser$.next(res)),
        catchError((error: HttpErrorResponse) => {
          this._loggedInUser$.next(null)
          if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, body was: `, error.error)
          }
          return throwError(() => new Error('Failed to login using cookie token.'))
        })
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



  // private functions

  private handleErrorLoginUsingCookie(error: HttpErrorResponse) {

  }
}
