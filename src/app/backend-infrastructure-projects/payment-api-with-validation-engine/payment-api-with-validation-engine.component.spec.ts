import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentApiWithValidationEngineComponent } from './payment-api-with-validation-engine.component';

describe('PaymentApiWithValidationEngineComponent', () => {
  let component: PaymentApiWithValidationEngineComponent;
  let fixture: ComponentFixture<PaymentApiWithValidationEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentApiWithValidationEngineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentApiWithValidationEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
