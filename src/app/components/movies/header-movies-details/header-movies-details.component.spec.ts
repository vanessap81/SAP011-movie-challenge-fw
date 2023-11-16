import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMoviesDetailsComponent } from './header-movies-details.component';

describe('HeaderMoviesDetailsComponent', () => {
  let component: HeaderMoviesDetailsComponent;
  let fixture: ComponentFixture<HeaderMoviesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMoviesDetailsComponent]
    });
    fixture = TestBed.createComponent(HeaderMoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
