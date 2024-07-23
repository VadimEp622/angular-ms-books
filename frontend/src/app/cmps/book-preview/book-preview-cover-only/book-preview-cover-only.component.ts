import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-preview-cover-only',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './book-preview-cover-only.component.html',
  styleUrl: './book-preview-cover-only.component.scss',
})
export class BookPreviewCoverOnlyComponent {
  @Input() book!: any;
}
