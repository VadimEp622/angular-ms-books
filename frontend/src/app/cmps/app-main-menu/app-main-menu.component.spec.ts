import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainMenuComponent } from './app-main-menu.component';

describe('AppMainMenuComponent', () => {
  let component: AppMainMenuComponent;
  let fixture: ComponentFixture<AppMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMainMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
