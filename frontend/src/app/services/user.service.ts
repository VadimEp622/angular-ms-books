import { Injectable } from '@angular/core'
import { storageService } from './async-storage.service'

const ENTITY = 'user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  public query() {
    return storageService.query(ENTITY)
      // .then(users => users.length < 1 ? _createDemoUsers() : users)
  }

  
  // ------------------ Private Functions ------------------

}
