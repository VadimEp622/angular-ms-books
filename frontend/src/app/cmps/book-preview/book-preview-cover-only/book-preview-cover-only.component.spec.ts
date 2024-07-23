import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewCoverOnlyComponent } from './book-preview-cover-only.component';

describe('BookPreviewCoverOnlyComponent', () => {
  let component: BookPreviewCoverOnlyComponent;
  let fixture: ComponentFixture<BookPreviewCoverOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPreviewCoverOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPreviewCoverOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
