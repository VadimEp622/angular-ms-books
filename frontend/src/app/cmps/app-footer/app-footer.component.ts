import { FooterMobileSecondaryComponent } from './footer-mobile-secondary/footer-mobile-secondary.component';
import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterMobileMainComponent } from './footer-mobile-main/footer-mobile-main.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgClass,
    FooterMobileMainComponent,
    FooterMobileSecondaryComponent,
    NgStyle,
  ],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss',
})
export class AppFooterComponent {
  @Input() layout: string = 'main-layout';

  // TODO: abstract form-search, to its own component, and have seperate header-search-bar & footer-search-bar, which will decide styling in form-search

  // INFO: if deciding to add price to books, them may have to generate a price for each new book in Backend, and use caching/database to store prices...
  //    Alternatively, we can make an app that functions purely as a database. we DO need to generate a book object in the database regardless...

  // TODO: BUG -> on mobile android, when scrolling up and down, and typing into input using mobile keyboard,
  //  footer-mobile navbar is for some reason clickable only about 50px~ above the actual navbar...
}
