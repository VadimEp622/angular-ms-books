import { Component } from '@angular/core'

@Component({
  selector: 'home-hero',
  standalone: true,
  imports: [],
  host: {
    class: 'full home-page-layout'
  },
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent {

}
