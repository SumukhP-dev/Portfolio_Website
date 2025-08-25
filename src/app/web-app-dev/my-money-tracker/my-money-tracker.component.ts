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
    '/images/web-app-dev/my-money-tracker/LoginPage.png',
    '/images/web-app-dev/my-money-tracker/HomePage.png',
    '/images/web-app-dev/my-money-tracker/HistoryPage.png',
    '/images/web-app-dev/my-money-tracker/AddTranactionPage.png',
    '/images/web-app-dev/my-money-tracker/SummaryPage.png',
    '/images/web-app-dev/my-money-tracker/AzureBackend.png',
    '/images/web-app-dev/my-money-tracker/MyMoneyTrackerSQLEntityRelationDatabaseDiagram.png',
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
