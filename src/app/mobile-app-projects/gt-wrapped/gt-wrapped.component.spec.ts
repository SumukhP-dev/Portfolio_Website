import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtwrappedComponent } from './gt-wrapped.component';

describe('GtwrappedComponent', () => {
  let component: GtwrappedComponent;
  let fixture: ComponentFixture<GtwrappedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GtwrappedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GtwrappedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
