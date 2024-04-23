import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewSideBySideComponent } from './book-preview-side-by-side.component';

describe('BookPreviewSideBySideComponent', () => {
  let component: BookPreviewSideBySideComponent;
  let fixture: ComponentFixture<BookPreviewSideBySideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPreviewSideBySideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookPreviewSideBySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
