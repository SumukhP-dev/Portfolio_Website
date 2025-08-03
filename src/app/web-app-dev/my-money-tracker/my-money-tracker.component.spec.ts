import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMoneyTrackerComponent } from './my-money-tracker.component';

describe('MyMoneyTrackerComponent', () => {
  let component: MyMoneyTrackerComponent;
  let fixture: ComponentFixture<MyMoneyTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyMoneyTrackerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyMoneyTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
