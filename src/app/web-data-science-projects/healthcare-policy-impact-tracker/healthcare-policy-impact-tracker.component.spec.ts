import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcarePolicyImpactTrackerComponent } from './healthcare-policy-impact-tracker.component';

describe('HealthcarePolicyImpactTrackerComponent', () => {
  let component: HealthcarePolicyImpactTrackerComponent;
  let fixture: ComponentFixture<HealthcarePolicyImpactTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcarePolicyImpactTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcarePolicyImpactTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
