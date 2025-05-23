import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelityautomatedtoolComponent } from './fidelityautomatedtool.component';

describe('FidelityautomatedtoolComponent', () => {
  let component: FidelityautomatedtoolComponent;
  let fixture: ComponentFixture<FidelityautomatedtoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FidelityautomatedtoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FidelityautomatedtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
