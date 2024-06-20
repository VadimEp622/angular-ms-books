import { Component } from '@angular/core';
import { FormHeaderSearchComponent } from '../../../forms/form-header-search/form-header-search.component';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [FormHeaderSearchComponent],
  host: { class: 'width-full flex' },
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {}
