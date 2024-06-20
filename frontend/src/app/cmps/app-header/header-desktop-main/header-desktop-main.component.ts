import { Component } from '@angular/core';
import { ProfileActionMenuComponent } from './profile-action-menu/profile-action-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LogoComponent } from '../../logo/logo.component';

@Component({
  selector: 'header-desktop-main',
  standalone: true,
  imports: [ProfileActionMenuComponent, SearchBarComponent, LogoComponent],
  templateUrl: './header-desktop-main.component.html',
  styleUrl: './header-desktop-main.component.scss',
})
export class HeaderDesktopMainComponent {
  // Header desktop main Will contain:
  // - logo
  // - search bar
  // - user profile
  // - (?) notification
  // TODO: searchbar ->
  //                    1) make a route for search results
  //                    2) make API for querying search results
}
