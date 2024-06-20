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

  // TODO: in desktop-header-main, when logged-in, have a clickable "arrow-down", which will open a menu, which will have a logout button (among other future buttons)

  // TODO: cart route ->
  // in mobile, cart button will route to cart-page.
  // in desktop, only when there are items in cart, a shiny cart button will appear near header-profile, with a count of items pending in cart, and clicking it will route to cart-page

  constructor(public mainMenuService: MainMenuService) {}

  onToggleMenu() {
    this.mainMenuService.toggleMenu();
  }

  onOpenMenu() {
    this.mainMenuService.setMenu(true);
  }
}
