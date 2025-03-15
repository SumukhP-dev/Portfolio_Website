import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymoneytrackerComponent } from './mymoneytracker.component';

describe('MymoneytrackerComponent', () => {
  let component: MymoneytrackerComponent;
  let fixture: ComponentFixture<MymoneytrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MymoneytrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MymoneytrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
