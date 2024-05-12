import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDesktopMainComponent } from './header-desktop-main.component';

describe('HeaderDesktopMainComponent', () => {
  let component: HeaderDesktopMainComponent;
  let fixture: ComponentFixture<HeaderDesktopMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDesktopMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderDesktopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
