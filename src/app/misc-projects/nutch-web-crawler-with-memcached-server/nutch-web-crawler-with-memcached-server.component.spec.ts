import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutchWebCrawlerWithMemcachedServerComponent } from './nutch-web-crawler-with-memcached-server.component';

describe('NutchWebCrawlerWithMemcachedServerComponent', () => {
  let component: NutchWebCrawlerWithMemcachedServerComponent;
  let fixture: ComponentFixture<NutchWebCrawlerWithMemcachedServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutchWebCrawlerWithMemcachedServerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      NutchWebCrawlerWithMemcachedServerComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
