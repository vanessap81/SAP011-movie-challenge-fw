import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMoviesDetailsComponent } from './main-movies-details.component';

describe('MainMoviesDetailsComponent', () => {
  let component: MainMoviesDetailsComponent;
  let fixture: ComponentFixture<MainMoviesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMoviesDetailsComponent]
    });
    fixture = TestBed.createComponent(MainMoviesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
