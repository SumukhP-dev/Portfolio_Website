import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutchWebCrawlerWithMemcachedserverComponent } from './nutch-web-crawler-with-memcachedserver.component';

describe('NutchWebCrawlerWithMemcachedserverComponent', () => {
  let component: NutchWebCrawlerWithMemcachedserverComponent;
  let fixture: ComponentFixture<NutchWebCrawlerWithMemcachedserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutchWebCrawlerWithMemcachedserverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutchWebCrawlerWithMemcachedserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
