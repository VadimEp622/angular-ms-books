import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMobileSecondaryComponent } from './footer-mobile-secondary.component';

describe('FooterMobileSecondaryComponent', () => {
  let component: FooterMobileSecondaryComponent;
  let fixture: ComponentFixture<FooterMobileSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMobileSecondaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterMobileSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
