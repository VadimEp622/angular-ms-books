import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// INFO: if you use @Injectable({ providedIn: 'root' }),
//  you do not need to import the service in the app.module.ts or any other module's providers array.
//  Angular handles the service registration for you.
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this._updateLayout();
      });
  }

  private layout: string = 'main-layout';

  public getLayout() {
    return this.layout;
  }

  // --------- Private Functions ---------
  private _updateLayout() {
    const url = this.router.url;
    // TODO: switch case may be faster?
    if (url === '/') {
      this.layout = 'home-page-layout';
    } else if (url.startsWith('/book')) {
      this.layout = 'details-layout';
    } else {
      this.layout = 'main-layout';
    }
  }
}
