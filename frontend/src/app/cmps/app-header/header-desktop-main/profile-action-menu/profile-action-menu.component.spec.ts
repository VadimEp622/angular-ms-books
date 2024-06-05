import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActionMenuComponent } from './profile-action-menu.component';

describe('ProfileActionMenuComponent', () => {
  let component: ProfileActionMenuComponent;
  let fixture: ComponentFixture<ProfileActionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileActionMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
