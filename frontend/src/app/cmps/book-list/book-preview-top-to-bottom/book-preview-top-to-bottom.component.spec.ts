import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewTopToBottomComponent } from './book-preview-top-to-bottom.component';

describe('BookPreviewTopToBottomComponent', () => {
  let component: BookPreviewTopToBottomComponent;
  let fixture: ComponentFixture<BookPreviewTopToBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPreviewTopToBottomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPreviewTopToBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
