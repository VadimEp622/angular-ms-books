import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-preview-side-by-side',
  standalone: true,
  imports: [],
  templateUrl: './book-preview-side-by-side.component.html',
  styleUrl: './book-preview-side-by-side.component.scss'
})
export class BookPreviewSideBySideComponent {
  @Input() book!: any

}
