import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ApiService } from '../../my-node-backend/api.service';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CoreModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  isDisabled = false;
}
