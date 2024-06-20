import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainMenuService } from '../../../services/main-menu.service';

@Component({
  selector: 'footer-mobile-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-mobile-main.component.html',
  styleUrl: './footer-mobile-main.component.scss',
})
export class FooterMobileMainComponent {
  constructor(public mainMenuService: MainMenuService) {}

  onOpenMenu() {
    this.mainMenuService.setMenu(true);
  }
}
