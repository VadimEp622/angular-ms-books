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

  // TODO: add routes/links to main footer icons

  // TODO: add search bar to secondary footer
  
  // INFO: if deciding to add price to books, them may have to generate a price for each new book in Backend, and use caching/database to store prices...
  //    Alternatively, we can make an app that functions purely as a database. we DO need to generate a book object in the database regardless...

}
