import { Component } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home/home.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-certificates',
  imports: [NgbCarousel],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {}
