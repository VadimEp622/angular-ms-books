import { JsonPipe } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'book-preview',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss'
})
export class BookPreviewComponent {
  @Input() book!: any

}
