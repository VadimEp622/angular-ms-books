import { Component } from '@angular/core';
import { LogoComponent } from '../../logo/logo.component';

@Component({
  selector: 'header-mobile-main',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './header-mobile-main.component.html',
  styleUrl: './header-mobile-main.component.scss',
})
export class HeaderMobileMainComponent {}
