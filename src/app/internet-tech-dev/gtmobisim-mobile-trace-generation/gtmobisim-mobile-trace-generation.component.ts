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
    '/images/internet-tech-dev/gtmobisim-mobile-trace-generation/10AgentTrace.png',
    '/images/internet-tech-dev/gtmobisim-mobile-trace-generation/10AgentTraceMap.png',
    '/images/internet-tech-dev/gtmobisim-mobile-trace-generation/10AgentTraceMap2.png',
    '/images/internet-tech-dev/gtmobisim-mobile-trace-generation/10AgentTraceMap3.png',
    '/images/internet-tech-dev/gtmobisim-mobile-trace-generation/10AgentTraceMap4.png',
    '/images/internet-tech-dev/gtmobisim-mobile-trace-generation/10AgentTraceMap5.png',
    '/images/internet-tech-dev/gtmobisim-mobile-trace-generation/1000000AgentTrace.png',
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
