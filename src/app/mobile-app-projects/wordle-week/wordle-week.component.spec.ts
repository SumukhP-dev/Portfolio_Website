import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleWeekComponent } from './wordle-week.component';

describe('WordleWeekComponent', () => {
  let component: WordleWeekComponent;
  let fixture: ComponentFixture<WordleWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordleWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
