import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamFlowAiPlatformComponent } from './dream-flow-ai-platform.component';

describe('DreamFlowAiPlatformComponent', () => {
  let component: DreamFlowAiPlatformComponent;
  let fixture: ComponentFixture<DreamFlowAiPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DreamFlowAiPlatformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DreamFlowAiPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

