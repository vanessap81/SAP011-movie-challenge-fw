import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMoviesDetailsComponent } from './footer-movies-details.component';

describe('FooterMoviesDetailsComponent', () => {
  let component: FooterMoviesDetailsComponent;
  let fixture: ComponentFixture<FooterMoviesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterMoviesDetailsComponent]
    });
    fixture = TestBed.createComponent(FooterMoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
