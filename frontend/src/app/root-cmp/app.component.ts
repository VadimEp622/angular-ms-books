import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ms-books'

  // TODO: consider making a dynamicCenteredModal component, for any future modal that needs to be centered in the middle of the screen, with a gray background 

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
