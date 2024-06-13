import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileMainComponent } from './header-mobile-main.component';

describe('HeaderMobileMainComponent', () => {
  let component: HeaderMobileMainComponent;
  let fixture: ComponentFixture<HeaderMobileMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMobileMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMobileMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
