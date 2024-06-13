import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMobileMainComponent } from './footer-mobile-main.component';

describe('FooterMobileMainComponent', () => {
  let component: FooterMobileMainComponent;
  let fixture: ComponentFixture<FooterMobileMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMobileMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterMobileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
