import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDesktopSecondaryComponent } from './header-desktop-secondary.component';

describe('HeaderDesktopSecondaryComponent', () => {
  let component: HeaderDesktopSecondaryComponent;
  let fixture: ComponentFixture<HeaderDesktopSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDesktopSecondaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDesktopSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
