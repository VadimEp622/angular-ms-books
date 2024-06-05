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

  // TODO: when switching routes, menu closing is done instantly, with disregard to transition styling (should roll to the right and dissappear)
  //   - a possible fix would be to put the app-main-menu in app-root, so it will exist in all routes (need to handle async pipe of observable<boolean> isMenuOpen differently)
  //   - perhaps also putting it in the child of <router-outlet></router-outlet> of root-cmp, so it will exist in all routes?


  @Input() isMenuOpen!: boolean | null


  constructor(public mainMenuService: MainMenuService) { }

  getMenuContainerClass(isMenuOpen: boolean) {
    return isMenuOpen ? ['active'] : []
  }

  getMenuClass(isMenuOpen: boolean) {
    return isMenuOpen ? ['left-0'] : ['left-neg-full']
  }

  onCloseMenu() {
    this.mainMenuService.setMenu(false)
  }
}
