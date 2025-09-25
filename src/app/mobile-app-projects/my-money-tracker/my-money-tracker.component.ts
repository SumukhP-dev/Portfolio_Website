import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mymoneytracker',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './my-money-tracker.component.html',
})
export class MyMoneyTrackerComponent {
  images = [
    '/images/mobile-app-projects/my-money-tracker/splash-page.png',
    '/images/mobile-app-projects/my-money-tracker/login-page.png',
    '/images/mobile-app-projects/my-money-tracker/home-page.png',
    '/images/mobile-app-projects/my-money-tracker/history-page.png',
    '/images/mobile-app-projects/my-money-tracker/add-data-page.png',
    '/images/mobile-app-projects/my-money-tracker/summary-page.png',
    '/images/mobile-app-projects/my-money-tracker/settings-page.png',
    '/images/mobile-app-projects/my-money-tracker/azure-backend.png',
    '/images/mobile-app-projects/my-money-tracker/llm-page.png',
    '/images/mobile-app-projects/my-money-tracker/my-money-tracker-sql-entity-relation-database-diagram.png',
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
