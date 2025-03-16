import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathernowComponent } from './weathernow.component';

describe('WeathernowComponent', () => {
  let component: WeathernowComponent;
  let fixture: ComponentFixture<WeathernowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeathernowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathernowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
