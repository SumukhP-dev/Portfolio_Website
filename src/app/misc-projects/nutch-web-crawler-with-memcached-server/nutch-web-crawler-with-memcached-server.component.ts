import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nutch-web-crawler-with-memcached-server',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './nutch-web-crawler-with-memcached-server.component.html',
  styleUrl: './nutch-web-crawler-with-memcached-server.component.scss',
})
export class NutchWebCrawlerWithMemcachedServerComponent {
  images = [
    '/images/misc-projects/nutch-web-crawler-with-memcached-server/url-crawl-example-finished.png',
    '/images/misc-projects/nutch-web-crawler-with-memcached-server/memcached-server-code.png',
    '/images/misc-projects/nutch-web-crawler-with-memcached-server/memcached-server-store-data-in-cache.png',
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel: NgbCarousel = new NgbCarousel();

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
