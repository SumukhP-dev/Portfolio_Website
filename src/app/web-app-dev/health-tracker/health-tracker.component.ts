import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-healthtracker',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './health-tracker.component.html',
})
export class HealthtrackerComponent {
  images = [
    '/images/web-app-dev/healthtracker/Sprite.jpeg',
    '/images/web-app-dev/healthtracker/LoginPage.png',
    '/images/web-app-dev/healthtracker/PersonalinfoPage.jpeg',
    '/images/web-app-dev/healthtracker/Calorie.jpeg',
    '/images/web-app-dev/healthtracker/WorkoutPlans.jpeg',
    '/images/web-app-dev/healthtracker/WorkoutTrackerPage.jpeg',
    '/images/web-app-dev/healthtracker/CommunityPage.jpeg',
    '/images/web-app-dev/healthtracker/database-console-firebase.png',
    '/images/web-app-dev/healthtracker/database-console-firebase-2.png',
    '/images/web-app-dev/healthtracker/database-console-firebase-3.png',
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
