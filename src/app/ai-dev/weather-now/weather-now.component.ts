import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarouselModule,
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-weathernow',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './weather-now.component.html',
})
export class WeathernowComponent {
  images = [
    '/images/ai-dev/weather-now/home-page-1.png',
    '/images/ai-dev/weather-now/home-page-2.png',
    '/images/ai-dev/weather-now/forecast-page.png',
    '/images/ai-dev/weather-now/gemini-chatbot-page.png',
    '/images/ai-dev/weather-now/rag-chatbot-page.png',
    '/images/ai-dev/weather-now/figma-forecast-page.png',
    '/images/ai-dev/weather-now/figma-heatmap-page.png',
    '/images/ai-dev/weather-now/figma-login-page.png',
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
