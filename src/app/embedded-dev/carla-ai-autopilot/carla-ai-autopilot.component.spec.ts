import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlaAiAutopilotComponent } from './carla-ai-autopilot.component';

describe('CarlaAiAutopilotComponent', () => {
  let component: CarlaAiAutopilotComponent;
  let fixture: ComponentFixture<CarlaAiAutopilotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarlaAiAutopilotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarlaAiAutopilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
