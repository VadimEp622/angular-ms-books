import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-preview-top-to-bottom',
  standalone: true,
  imports: [],
  templateUrl: './book-preview-top-to-bottom.component.html',
  styleUrl: './book-preview-top-to-bottom.component.scss'
})
export class BookPreviewTopToBottomComponent {
  @Input() book!: any


}
