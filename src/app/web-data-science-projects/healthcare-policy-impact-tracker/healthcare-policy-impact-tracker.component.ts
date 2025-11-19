import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarouselModule,
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-healthcare-policy-impact-tracker',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './healthcare-policy-impact-tracker.component.html',
})
export class HealthcarePolicyImpactTrackerComponent {
  images = [
    '/images/web-data-science-projects/healthcare-policy-impact-tracker/frontend-image-1.png',
    '/images/web-data-science-projects/healthcare-policy-impact-tracker/frontend-image-2.png',
    '/images/web-data-science-projects/healthcare-policy-impact-tracker/frontend-image-3.png',
    '/images/web-data-science-projects/healthcare-policy-impact-tracker/project-diagram-dataset.png',
    '/images/web-data-science-projects/healthcare-policy-impact-tracker/project-diagram.png',
    '/images/web-data-science-projects/healthcare-policy-impact-tracker/website-path-diagram.png',
  ];

  altTexts = [
    'Healthcare Policy Impact Tracker frontend interface view 1',
    'Healthcare Policy Impact Tracker frontend interface view 2',
    'Healthcare Policy Impact Tracker frontend interface view 3',
    'Healthcare Policy Impact Tracker project dataset diagram',
    'Healthcare Policy Impact Tracker project architecture diagram',
    'Healthcare Policy Impact Tracker website navigation path diagram',
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
