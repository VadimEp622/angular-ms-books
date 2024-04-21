import { Component, Input } from '@angular/core'
import { NgClass } from '@angular/common'
import { MainMenuService } from '../../services/main-menu.service'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgClass, RouterLink],
  host: {
    class: 'pos-abs top-0'
  },
  templateUrl: './app-main-menu.component.html',
  styleUrl: './app-main-menu.component.scss'
})
export class AppMainMenuComponent {

  // TODO: make X button an SVG
  // TODO: make a main-menu setter, in addition to the toggler (for when a certain click will always change the state to one boolean value, and never the other)
  // TODO: make routes guards, so before each route load, set main-menu state to false

  @Input() isMenuOpen!: boolean

  constructor(public mainMenuService: MainMenuService) { }

  getMenuClass() {
    return this.isMenuOpen ? ['right-0'] : ['right-neg-full']
  }

  onToggleMenu() {
    this.mainMenuService.toggleMenu()
  }
}
