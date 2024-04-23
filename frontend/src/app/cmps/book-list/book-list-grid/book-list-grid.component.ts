import { Component, Input } from '@angular/core'
import { NgFor } from '@angular/common'
import { BooksByGenre } from '../../../models/books-by-genre.model'
import { BookPreviewTopToBottomComponent } from '../book-preview-top-to-bottom/book-preview-top-to-bottom.component'

@Component({
  selector: 'book-list-grid',
  standalone: true,
  imports: [BookPreviewTopToBottomComponent, NgFor],
  templateUrl: './book-list-grid.component.html',
  styleUrl: './book-list-grid.component.scss'
})
export class BookListGridComponent {
  @Input() booksByGenre!: BooksByGenre
}
