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
  templateUrl: './healthtracker.component.html',
})
export class HealthtrackerComponent {
  images = [
    '/images/healthtracker/Sprite.jpeg',
    '/images/healthtracker/LoginPage.png',
    '/images/healthtracker/PersonalinfoPage.jpeg',
    '/images/healthtracker/Calorie.jpeg',
    '/images/healthtracker/WorkoutPlans.jpeg',
    '/images/healthtracker/WorkoutTrackerPage.jpeg',
    '/images/healthtracker/CommunityPage.jpeg',
    '/images/healthtracker/database-console-firebase.png',
    '/images/healthtracker/database-console-firebase-2.png',
    '/images/healthtracker/database-console-firebase-3.png',
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
