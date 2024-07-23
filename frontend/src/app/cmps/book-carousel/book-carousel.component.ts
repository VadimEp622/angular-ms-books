import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RouterLink } from '@angular/router';
import { APIBooksByGenre, APIBooksBySearch } from '../../models/api.model';
import { BookListProps } from '../../models/props.model';
import { NgIf } from '@angular/common';
import { BookPreviewCoverOnlyComponent } from '../book-preview/book-preview-cover-only/book-preview-cover-only.component';

@Component({
  selector: 'book-carousel',
  standalone: true,
  imports: [CarouselModule, RouterLink, NgIf, BookPreviewCoverOnlyComponent],
  templateUrl: './book-carousel.component.html',
  styleUrl: './book-carousel.component.scss',
})
export class BookCarouselComponent {
  // @Input() booksByGenre!: APIBooksByGenre;

  @Input() props!: BookListProps<APIBooksByGenre | APIBooksBySearch>;

  responsiveOptions: any[] = this.getResponsiveOptions();

  // TODO: increase book picture's dimensions
  // TODO: rethink if it's better for horizontal carousel to only have book pictures,
  //          and have lists for books + title + authors that are either not carousels or maybe horizontal carousels?

  constructor() {}

  // below is for cover-only
  getResponsiveOptions() {
    return [
      {
        breakpoint: '1439px',
        numVisible: 5,
        numScroll: 3,
      },
      {
        breakpoint: '1049px',
        numVisible: 4,
        numScroll: 3,
      },
      {
        breakpoint: '750px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '470px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getGenre(data: APIBooksByGenre | APIBooksBySearch): string {
    if ('genre' in data) {
      return data.genre;
    } else {
      return ''; // Handle APIBooksBySearch case accordingly
    }
  }

  // // below is for cover-only (older)
  // getResponsiveOptions() {
  //   return [
  //     {
  //       breakpoint: '2100px',
  //       numVisible: 12,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1950px',
  //       numVisible: 11,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1800px',
  //       numVisible: 10,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1650px',
  //       numVisible: 9,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1500px',
  //       numVisible: 8,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1350px',
  //       numVisible: 7,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1200px',
  //       numVisible: 6,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1050px',
  //       numVisible: 5,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '900px',
  //       numVisible: 4,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '750px',
  //       numVisible: 3,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '600px',
  //       numVisible: 2,
  //       numScroll: 2
  //     },
  //     {
  //       breakpoint: '450px',
  //       numVisible: 1,
  //       numScroll: 1
  //     }
  //   ]
  // }

  // // below is for side-by-side
  // getResponsiveOptions() {
  //   return [
  //     {
  //       breakpoint: '2000px',
  //       numVisible: 6,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1700px',
  //       numVisible: 5,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1400px',
  //       numVisible: 4,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '1100px',
  //       numVisible: 3,
  //       numScroll: 3
  //     },
  //     {
  //       breakpoint: '800px',
  //       numVisible: 2,
  //       numScroll: 2
  //     },
  //     {
  //       breakpoint: '500px',
  //       numVisible: 1,
  //       numScroll: 1
  //     }
  //   ]
  // }
}
