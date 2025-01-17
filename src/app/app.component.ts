import { RouterModule, RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../my-node-backend/api.service';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
