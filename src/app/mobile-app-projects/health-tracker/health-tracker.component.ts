import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-health-tracker',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './health-tracker.component.html',
})
export class HealthTrackerComponent {
  images = [
    '/images/mobile-app-projects/health-tracker/sprite.jpeg',
    '/images/mobile-app-projects/health-tracker/login-page.png',
    '/images/mobile-app-projects/health-tracker/personal-info-page.jpeg',
    '/images/mobile-app-projects/health-tracker/calorie.jpeg',
    '/images/mobile-app-projects/health-tracker/workout-plans.jpeg',
    '/images/mobile-app-projects/health-tracker/workout-tracker-page.jpeg',
    '/images/mobile-app-projects/health-tracker/community-page.jpeg',
    '/images/mobile-app-projects/health-tracker/database-console-firebase.png',
    '/images/mobile-app-projects/health-tracker/database-console-firebase-2.png',
    '/images/mobile-app-projects/health-tracker/database-console-firebase-3.png',
  ];

  altTexts = [
    'HealthTracker app sprite character',
    'HealthTracker app login page',
    'HealthTracker app personal information page',
    'HealthTracker app calorie tracking page',
    'HealthTracker app workout plans page',
    'HealthTracker app workout tracker page',
    'HealthTracker app community page',
    'HealthTracker Firebase database console view 1',
    'HealthTracker Firebase database console view 2',
    'HealthTracker Firebase database console view 3',
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
