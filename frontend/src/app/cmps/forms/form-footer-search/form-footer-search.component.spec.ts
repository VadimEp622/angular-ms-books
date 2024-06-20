import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFooterSearchComponent } from './form-footer-search.component';

describe('FormFooterSearchComponent', () => {
  let component: FormFooterSearchComponent;
  let fixture: ComponentFixture<FormFooterSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFooterSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFooterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
