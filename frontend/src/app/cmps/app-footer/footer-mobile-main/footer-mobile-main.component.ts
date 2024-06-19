import { Component } from '@angular/core';
import { DynamicSvgComponent } from '../../dynamic-svg.component';

@Component({
  selector: 'footer-mobile-main',
  standalone: true,
  imports: [DynamicSvgComponent],
  templateUrl: './footer-mobile-main.component.html',
  styleUrl: './footer-mobile-main.component.scss',
})
export class FooterMobileMainComponent {}
