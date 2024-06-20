import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHeaderSearchComponent } from './form-header-search.component';

describe('FormHeaderSearchComponent', () => {
  let component: FormHeaderSearchComponent;
  let fixture: ComponentFixture<FormHeaderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHeaderSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormHeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
