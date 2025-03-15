import {
  ChangeDetectionStrategy,
  Component,
  model,
  SimpleChanges,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CoreModule } from '../core/core.module';
import { DropdownDirective } from '../core/features/dropdown/dropdown.directive';
import { HostComponent } from '../core/features/host/host.component';
import { ChangeDetectorRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { selectWrapper, toggleWrapper, wrapperFeature } from '../app.state';

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
export class HomeComponent implements OnInit {
  store: Store<{ wrapper: boolean }>;
  cRef: ChangeDetectorRef;
  wrapper$: Observable<boolean> | undefined;
  wrapper: any;

  constructor(store: Store<{ wrapper: boolean }>, cRef: ChangeDetectorRef) {
    this.store = store;
    this.cRef = cRef;
  }
  ngOnInit(): void {
    this.wrapper$ = this.store.select(selectWrapper);

    setTimeout(() => {
      this.wrapper$ = this.store.select(selectWrapper);
      this.wrapper$.subscribe((value) => {
        console.log(1 + ' ' + value);
      });
    }, 3000);
  }
}
