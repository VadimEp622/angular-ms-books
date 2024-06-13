import { HeaderMobileMainComponent } from './header-mobile-main/header-mobile-main.component';
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DynamicSvgComponent } from '../dynamic-svg.component';
import { MainMenuService } from './../../services/main-menu.service';
import { HeaderDesktopMainComponent } from './header-desktop-main/header-desktop-main.component';
import { HeaderDesktopSecondaryComponent } from './header-desktop-secondary/header-desktop-secondary.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    DynamicSvgComponent,
    HeaderDesktopMainComponent,
    HeaderDesktopSecondaryComponent,
    HeaderMobileMainComponent,
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  @Input() layout: string = 'main-layout';

  // TODO: improve header + side menu background color (may be better to stick to chosen MAIN colors, and not lighten/darken them, since that specific color combo is easy on the eye)

  // TODO: add mobile header

  constructor(public mainMenuService: MainMenuService) {}

  onToggleMenu() {
    this.mainMenuService.toggleMenu();
  }

  onOpenMenu() {
    this.mainMenuService.setMenu(true);
  }
}
