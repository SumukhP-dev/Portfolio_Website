import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingLedgerFabricApplicationComponent } from './voting-ledger-fabric-application.component';

describe('VotingLedgerFabricApplicationComponent', () => {
  let component: VotingLedgerFabricApplicationComponent;
  let fixture: ComponentFixture<VotingLedgerFabricApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingLedgerFabricApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingLedgerFabricApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
