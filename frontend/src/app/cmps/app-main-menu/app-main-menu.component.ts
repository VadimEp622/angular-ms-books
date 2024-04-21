import { Component, Input } from '@angular/core'
import { NgClass, NgIf } from '@angular/common'
import { RouterLink } from '@angular/router'
import { MainMenuService } from '../../services/main-menu.service'
import { DynamicSvgComponent } from '../dynamic-svg.component'


@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgClass, RouterLink, NgIf, DynamicSvgComponent],
  host: {
    class: 'pos-abs top-0'
  },
  templateUrl: './app-main-menu.component.html',
  styleUrl: './app-main-menu.component.scss'
})
export class AppMainMenuComponent {


  @Input() isMenuOpen!: boolean | null


  constructor(public mainMenuService: MainMenuService) { }

  getMenuContainerClass(isMenuOpen: boolean) {
    return isMenuOpen ? ['active'] : []
  }

  getMenuClass(isMenuOpen: boolean) {
    return isMenuOpen ? ['right-0'] : ['right-neg-full']
  }

  onCloseMenu() {
    this.mainMenuService.setMenu(false)
  }
}
