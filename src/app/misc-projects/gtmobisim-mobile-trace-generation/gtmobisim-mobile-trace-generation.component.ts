import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gtmobisim-mobile-trace-generation',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './gtmobisim-mobile-trace-generation.component.html',
  styleUrl: './gtmobisim-mobile-trace-generation.component.scss',
})
export class GtmobisimMobileTraceGenerationComponent {
  images = [
    '/images/misc-projects/gtmobisim-mobile-trace-generation/10-agent-trace-map.png',
    '/images/misc-projects/gtmobisim-mobile-trace-generation/10-agent-trace-map2.png',
    '/images/misc-projects/gtmobisim-mobile-trace-generation/10-agent-trace-map3.png',
    '/images/misc-projects/gtmobisim-mobile-trace-generation/10-agent-trace-map4.png',
    '/images/misc-projects/gtmobisim-mobile-trace-generation/10-agent-trace-map5.png',
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
