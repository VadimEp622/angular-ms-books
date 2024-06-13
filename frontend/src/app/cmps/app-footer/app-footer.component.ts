import { FooterMobileSecondaryComponent } from './footer-mobile-secondary/footer-mobile-secondary.component';
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterMobileMainComponent } from './footer-mobile-main/footer-mobile-main.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass, FooterMobileMainComponent, FooterMobileSecondaryComponent],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss',
})
export class AppFooterComponent {
  @Input() layout: string = 'main-layout';
}
