import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeVoiceTranslationComponent } from './real-time-voice-translation.component';

describe('RealTimeVoiceTranslationComponent', () => {
  let component: RealTimeVoiceTranslationComponent;
  let fixture: ComponentFixture<RealTimeVoiceTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeVoiceTranslationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeVoiceTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

