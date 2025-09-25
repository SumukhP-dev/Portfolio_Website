import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextjsdashboardComponent } from './nextjs-dashboard.component';

describe('NextjsdashboardComponent', () => {
  let component: NextjsdashboardComponent;
  let fixture: ComponentFixture<NextjsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextjsdashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NextjsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
