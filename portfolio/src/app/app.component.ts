import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../my-node-backend/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
