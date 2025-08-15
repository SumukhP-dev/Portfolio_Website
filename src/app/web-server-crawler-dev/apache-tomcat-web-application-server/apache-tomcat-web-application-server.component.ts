import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apache-tomcat-web-application-server',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './apache-tomcat-web-application-server.component.html',
  styleUrl: './apache-tomcat-web-application-server.component.scss',
})
export class ApacheTomcatWebApplicationServerComponent {
  images = [
    '/images/internet-tech-dev/apache-tomcat-web-application-server/StartPage.jpg',
    '/images/internet-tech-dev/apache-tomcat-web-application-server/PhoneStartPage.jpg',
    '/images/internet-tech-dev/apache-tomcat-web-application-server/RequestsRecordPageDetails.jpg',
    '/images/internet-tech-dev/apache-tomcat-web-application-server/RequestsRecordPageDetails2.jpg',
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
