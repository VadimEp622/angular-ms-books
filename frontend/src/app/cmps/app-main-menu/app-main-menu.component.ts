import { Component, Input } from '@angular/core'
import { NgClass } from '@angular/common'
import { MainMenuService } from '../../services/main-menu.service'

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app-main-menu.component.html',
  styleUrl: './app-main-menu.component.scss'
})
export class AppMainMenuComponent {

  @Input() isMenuOpen!: boolean

  constructor(public mainMenuService: MainMenuService) { }

  getMenuClass() {
    return this.isMenuOpen ? ['right-0'] : ['right-neg-300']
  }

  onToggleMenu() {
    this.mainMenuService.toggleMenu()
  }
}
