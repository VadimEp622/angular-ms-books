import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBookSearchBarComponent } from './form-book-search-bar.component';

describe('FormBookSearchBarComponent', () => {
  let component: FormBookSearchBarComponent;
  let fixture: ComponentFixture<FormBookSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBookSearchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormBookSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
