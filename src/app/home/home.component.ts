import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../core/components/header/header.component';
import { HostComponent } from '../../core/features/host/host.component';
import { DropdownDirective } from '../../core/features/dropdown/dropdown.directive';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    CoreModule,
    HostComponent,
    DropdownDirective,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  wrapper: Observable<boolean>;

  constructor(private store: Store<{ wrapper: boolean }>) {
    this.wrapper = this.store.select('wrapper');
  }
}
