import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  webButtonsVisible = true;
  gameButtonsVisible = false;
  embeddedButtonsVisible = false;
  internetTechnologyButtonsVisible = false;

  ngOnInit() {}

  nextHeaders() {
    console.log('Test');

    if (this.webButtonsVisible) {
      this.webButtonsVisible = false;
      this.gameButtonsVisible = true;
    } else if (this.gameButtonsVisible) {
      this.gameButtonsVisible = false;
      this.embeddedButtonsVisible = true;
    } else if (this.embeddedButtonsVisible) {
      this.embeddedButtonsVisible = false;
      this.internetTechnologyButtonsVisible = true;
    } else if (this.internetTechnologyButtonsVisible) {
      this.internetTechnologyButtonsVisible = false;
      this.webButtonsVisible = true;
    }

    console.log(
      this.webButtonsVisible +
        ' ' +
        this.gameButtonsVisible +
        ' ' +
        this.embeddedButtonsVisible +
        ' ' +
        this.internetTechnologyButtonsVisible
    );
  }
}
