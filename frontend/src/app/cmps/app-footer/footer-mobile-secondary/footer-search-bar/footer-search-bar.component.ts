import { Component } from '@angular/core';
import { FormBookSearchBarComponent } from '../../../forms/form-book-search-bar/form-book-search-bar.component';

@Component({
  selector: 'footer-search-bar',
  standalone: true,
  imports: [FormBookSearchBarComponent],
  host: { class: 'width-full flex' },
  templateUrl: './footer-search-bar.component.html',
  styleUrl: './footer-search-bar.component.scss',
})
export class FooterSearchBarComponent {}
