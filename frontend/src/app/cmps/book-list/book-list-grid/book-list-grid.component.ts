import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { BookPreviewTopToBottomComponent } from '../book-preview-top-to-bottom/book-preview-top-to-bottom.component';
import { RouterLink } from '@angular/router';
import { APIBooksByGenre } from '../../../models/api.model';

@Component({
  selector: 'book-list-grid',
  standalone: true,
  imports: [BookPreviewTopToBottomComponent, NgFor, RouterLink],
  templateUrl: './book-list-grid.component.html',
  styleUrl: './book-list-grid.component.scss',
})
export class BookListGridComponent {
  @Input() booksByGenre!: APIBooksByGenre;
}
