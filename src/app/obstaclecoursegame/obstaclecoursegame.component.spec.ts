import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstaclecoursegameComponent } from './obstaclecoursegame.component';

describe('ObstaclecoursegameComponent', () => {
  let component: ObstaclecoursegameComponent;
  let fixture: ComponentFixture<ObstaclecoursegameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObstaclecoursegameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObstaclecoursegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
