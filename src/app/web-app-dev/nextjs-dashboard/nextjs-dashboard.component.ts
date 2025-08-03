import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarouselModule,
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nextjsdashboard',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './nextjs-dashboard.component.html',
})
export class NextjsdashboardComponent {
  images = [
    '/images/web-app-dev/nextjs-dashboard/intro-sample-finance-website-vercel-app.png',
    '/images/web-app-dev/nextjs-dashboard/login-sample-finance-website-vercel-app.png',
    '/images/web-app-dev/nextjs-dashboard/sign-up-sample-finance-website-vercel-app.png',
    '/images/web-app-dev/nextjs-dashboard/dashboard-sample-finance-website-vercel-app.png',
    '/images/web-app-dev/nextjs-dashboard/create-invoices-sample-finance-website-vercel-app.png',
    '/images/web-app-dev/nextjs-dashboard/postgresql-console-neon-tech.png',
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
