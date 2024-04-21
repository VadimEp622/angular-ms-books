import { NgClass } from '@angular/common'
import { Component, Input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { DynamicSvgComponent } from '../dynamic-svg.component'
import { MainMenuService } from './../../services/main-menu.service'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgClass, DynamicSvgComponent],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @Input() layout: string = 'main-layout'

  constructor(public mainMenuService: MainMenuService) { }

  onToggleMenu() {
    this.mainMenuService.toggleMenu()
  }

  onOpenMenu() {
    this.mainMenuService.setMenu(true)
  }
}
