import { Component } from '@angular/core';
import { FormFooterSearchComponent } from '../../../forms/form-footer-search/form-footer-search.component';

@Component({
  selector: 'footer-search-bar',
  standalone: true,
  imports: [FormFooterSearchComponent],
  host: { class: 'width-full flex' },
  templateUrl: './footer-search-bar.component.html',
  styleUrl: './footer-search-bar.component.scss',
})
export class FooterSearchBarComponent {}
