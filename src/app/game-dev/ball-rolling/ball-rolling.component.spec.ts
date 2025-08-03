import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallrollinggameComponent } from './ball-rolling.component';

describe('BallrollinggameComponent', () => {
  let component: BallrollinggameComponent;
  let fixture: ComponentFixture<BallrollinggameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BallrollinggameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BallrollinggameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
