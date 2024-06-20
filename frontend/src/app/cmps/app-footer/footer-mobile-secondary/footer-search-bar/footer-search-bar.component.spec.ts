import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSearchBarComponent } from './footer-search-bar.component';

describe('FooterSearchBarComponent', () => {
  let component: FooterSearchBarComponent;
  let fixture: ComponentFixture<FooterSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSearchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
