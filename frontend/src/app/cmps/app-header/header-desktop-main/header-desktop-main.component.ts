import { Component } from '@angular/core';
import { ProfileActionMenuComponent } from './profile-action-menu/profile-action-menu.component';

@Component({
  selector: 'header-desktop-main',
  standalone: true,
  imports: [ProfileActionMenuComponent],
  templateUrl: './header-desktop-main.component.html',
  styleUrl: './header-desktop-main.component.scss'
})
export class HeaderDesktopMainComponent {


  // Header desktop main Will contain:
  // - logo
  // - search bar
  // - user profile
  // - (?) notification

}
