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
    '/images/web-data-science-projects/weather-now/home-page-1.png',
    '/images/web-data-science-projects/weather-now/home-page-2.png',
    '/images/web-data-science-projects/weather-now/forecast-page.png',
    '/images/web-data-science-projects/weather-now/gemini-chatbot-page.png',
    '/images/web-data-science-projects/weather-now/rag-chatbot-page.png',
    '/images/web-data-science-projects/weather-now/figma-forecast-page.png',
    '/images/web-data-science-projects/weather-now/figma-heatmap-page.png',
    '/images/web-data-science-projects/weather-now/figma-login-page.png',
  ];

  altTexts = [
    'Weather Now website home page view 1',
    'Weather Now website home page view 2',
    'Weather Now website forecast page',
    'Weather Now website Gemini AI chatbot page',
    'Weather Now website RAG chatbot page',
    'Weather Now Figma design forecast page',
    'Weather Now Figma design heatmap page',
    'Weather Now Figma design login page',
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
