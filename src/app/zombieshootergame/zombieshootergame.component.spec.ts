import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZombieshootergameComponent } from './zombieshootergame.component';

describe('ZombieshootergameComponent', () => {
  let component: ZombieshootergameComponent;
  let fixture: ComponentFixture<ZombieshootergameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZombieshootergameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZombieshootergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
