import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-preview-side-by-side',
  standalone: true,
  imports: [NgIf, RouterLink],
  host: {
    class: 'flex pd-10 mg-in-10',
  },
  templateUrl: './book-preview-side-by-side.component.html',
  styleUrl: './book-preview-side-by-side.component.scss',
})
export class BookPreviewSideBySideComponent {
  @Input() book!: any;
}
