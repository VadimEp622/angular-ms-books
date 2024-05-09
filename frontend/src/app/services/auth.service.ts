import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'


const ENTITY = 'auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.api_url + ENTITY

  constructor(
    private http: HttpClient
  ) { }

  // TODO: research angular + node.js auth, and whether logout needs to be a post with body containing credentials

  public login(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials)
  }

  public signup(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/signup`, credentials)
  }

  public logout(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}/signup`, credentials)
  }
}