import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'book-preview-top-to-bottom',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './book-preview-top-to-bottom.component.html',
  styleUrl: './book-preview-top-to-bottom.component.scss',
})
export class BookPreviewTopToBottomComponent {
  @Input() book!: any;
}
