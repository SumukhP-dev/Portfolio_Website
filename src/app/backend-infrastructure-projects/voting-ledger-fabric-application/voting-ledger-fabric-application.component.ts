import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbCarousel,
  NgbCarouselModule,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-voting-ledger-fabric-application',
  imports: [NgbCarouselModule, FormsModule],
  templateUrl: './voting-ledger-fabric-application.component.html',
  styleUrl: './voting-ledger-fabric-application.component.scss',
})
export class VotingLedgerFabricApplicationComponent {
  images = [
    '/images/backend-infrastructure-projects/voting-ledger-fabric-application/get-votes-example.jpg',
    '/images/backend-infrastructure-projects/voting-ledger-fabric-application/example-puppy-vote.jpg',
    '/images/backend-infrastructure-projects/voting-ledger-fabric-application/example-query-candidate.jpg',
  ];

  altTexts = [
    'Voting Ledger Fabric application get votes example',
    'Voting Ledger Fabric application puppy vote example',
    'Voting Ledger Fabric application query candidate example',
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
