import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DynamicSvgService {

  constructor(private http: HttpClient) { }

  loadSvg(path: string): Observable<string> {
    return this.http.get(path, { responseType: 'text' })
  }
}
