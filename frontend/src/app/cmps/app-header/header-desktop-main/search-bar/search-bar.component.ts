import { Component } from '@angular/core';
import { FormBookSearchBarComponent } from '../../../forms/form-book-search-bar/form-book-search-bar.component';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [FormBookSearchBarComponent],
  host: { class: 'width-full flex' },
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {}
