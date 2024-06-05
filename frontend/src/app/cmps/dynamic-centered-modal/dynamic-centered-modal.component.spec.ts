import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCenteredModalComponent } from './dynamic-centered-modal.component';

describe('DynamicCenteredModalComponent', () => {
  let component: DynamicCenteredModalComponent;
  let fixture: ComponentFixture<DynamicCenteredModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicCenteredModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicCenteredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
