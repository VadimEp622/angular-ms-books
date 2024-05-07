import { Component, Input } from '@angular/core'
import { BookPreviewSideBySideComponent } from '../book-preview-side-by-side/book-preview-side-by-side.component'
import { BooksByGenre } from '../../../models/books-by-genre.model'
import { NgFor } from '@angular/common'

@Component({
  selector: 'book-list-vertical',
  standalone: true,
  imports: [NgFor, BookPreviewSideBySideComponent],
  templateUrl: './book-list-vertical.component.html',
  styleUrl: './book-list-vertical.component.scss'
})
export class BookListVerticalComponent {
  @Input() booksByGenre!: BooksByGenre

}
