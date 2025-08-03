import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtmobisimMobileTraceGenerationComponent } from './gtmobisim-mobile-trace-generation.component';

describe('GtmobisimMobileTraceGenerationComponent', () => {
  let component: GtmobisimMobileTraceGenerationComponent;
  let fixture: ComponentFixture<GtmobisimMobileTraceGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GtmobisimMobileTraceGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtmobisimMobileTraceGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
