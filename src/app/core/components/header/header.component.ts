import { Component } from '@angular/core';
import { provideRouter, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}