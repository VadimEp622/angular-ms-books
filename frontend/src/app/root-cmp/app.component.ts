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

  // TODO: no matter what, stop using local-storage. Decide on one of the following ->
  //    my options:
  //       1. Don't use Github-pages.
  //       2. If using Github-pages, use only hardcoded demo data.
  //       3. If using Github-pages, set prod/dev CRUD API to be the same ["cloud_service_url/api/"],
  //           and find a way to hide said url from being pushed to github pages (research angular env variables AND github pages secrets).
}
