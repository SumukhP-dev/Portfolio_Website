import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthtrackerComponent } from './healthtracker.component';

describe('HealthtrackerComponent', () => {
  let component: HealthtrackerComponent;
  let fixture: ComponentFixture<HealthtrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthtrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
