import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wordle-week',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './wordle-week.component.html',
  styleUrl: './wordle-week.component.scss',
})
export class WordleWeekComponent {
  images = [
    '/images/mobile-app-projects/wordle-week/guess1.png',
    '/images/mobile-app-projects/wordle-week/guess2.png',
    '/images/mobile-app-projects/wordle-week/guess3.png',
  ];

  altTexts = [
    'WordleWeek iOS app first guess gameplay',
    'WordleWeek iOS app second guess gameplay',
    'WordleWeek iOS app third guess gameplay',
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
