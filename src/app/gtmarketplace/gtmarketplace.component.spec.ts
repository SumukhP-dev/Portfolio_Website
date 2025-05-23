import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtmarketplaceComponent } from './gtmarketplace.component';

describe('GtmarketplaceComponent', () => {
  let component: GtmarketplaceComponent;
  let fixture: ComponentFixture<GtmarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GtmarketplaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtmarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
