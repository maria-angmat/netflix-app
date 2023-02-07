import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsAppComponent } from './films-app.component';

describe('FilmsAppComponent', () => {
  let component: FilmsAppComponent;
  let fixture: ComponentFixture<FilmsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
