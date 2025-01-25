import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { DropdownDirective } from '../core/features/dropdown/dropdown.directive';
import { HostComponent } from '../core/features/host/host.component';

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
})
export class HomeComponent {
  wrapper: Observable<boolean>;

  constructor(private store: Store<{ wrapper: boolean }>) {
    this.wrapper = this.store.select('wrapper');
  }
}
