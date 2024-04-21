import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { AsyncPipe, NgClass, NgIf } from '@angular/common'
import { Observable } from 'rxjs'
import { AppHeaderComponent } from '../../cmps/app-header/app-header.component'
import { AppMainMenuComponent } from '../../cmps/app-main-menu/app-main-menu.component'
import { LayoutService } from '../../services/layout.service'
import { MainMenuService } from './../../services/main-menu.service'

@Component({
  selector: 'dynamic-layout',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgIf, AsyncPipe, AppHeaderComponent, AppMainMenuComponent],
  templateUrl: './dynamic-layout.component.html',
  styleUrl: './dynamic-layout.component.scss'
})
export class DynamicLayoutComponent implements OnInit {

  constructor(
    public layoutService: LayoutService,
    public mainMenuService: MainMenuService
  ) { }

  isMenuOpen$!: Observable<boolean>

  ngOnInit() {
    this.isMenuOpen$ = this.mainMenuService.isMenuOpen$
  }

}
