import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListHorizontalCarouselComponent } from './book-list-horizontal-carousel.component';

describe('BookListHorizontalCarouselComponent', () => {
  let component: BookListHorizontalCarouselComponent;
  let fixture: ComponentFixture<BookListHorizontalCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListHorizontalCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookListHorizontalCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
