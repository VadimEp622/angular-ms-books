import { Component } from '@angular/core';
import { FooterSearchBarComponent } from './footer-search-bar/footer-search-bar.component';

@Component({
  selector: 'footer-mobile-secondary',
  standalone: true,
  imports: [FooterSearchBarComponent],
  templateUrl: './footer-mobile-secondary.component.html',
  styleUrl: './footer-mobile-secondary.component.scss',
})
export class FooterMobileSecondaryComponent {}
