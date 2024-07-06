import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-preview-side-by-side',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './book-preview-side-by-side.component.html',
  styleUrl: './book-preview-side-by-side.component.scss',
})
export class BookPreviewSideBySideComponent {
  @Input() book!: any;

  // TODO: add hover effect
}
