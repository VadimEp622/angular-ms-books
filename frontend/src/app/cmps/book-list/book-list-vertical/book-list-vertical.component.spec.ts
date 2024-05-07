import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListVerticalComponent } from './book-list-vertical.component';

describe('BookListVerticalComponent', () => {
  let component: BookListVerticalComponent;
  let fixture: ComponentFixture<BookListVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookListVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
