import { Component } from '@angular/core'
import { DynamicSvgComponent } from '../../dynamic-svg.component'
import { MainMenuService } from '../../../services/main-menu.service'

@Component({
  selector: 'header-desktop-secondary',
  standalone: true,
  imports: [DynamicSvgComponent],
  templateUrl: './header-desktop-secondary.component.html',
  styleUrl: './header-desktop-secondary.component.scss'
})
export class HeaderDesktopSecondaryComponent {


  // Header desktop secondary Will contain:
  // - hamburger nav menu
  // - book genres (?)

  constructor(public mainMenuService: MainMenuService) { }

  onOpenMenu() {
    this.mainMenuService.setMenu(true)
  }

}
