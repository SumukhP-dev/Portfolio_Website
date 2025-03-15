import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  provideRouter,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { DropdownDirective } from '../../features/dropdown/dropdown.directive';
import { HostComponent } from '../../features/host/host.component';
import { createSelector, Store } from '@ngrx/store';
import { toggleWrapper } from '../../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  wrapper$: Observable<boolean>;

  constructor(private store: Store<{ wrapper: boolean }>) {
    this.wrapper$ = store.select('wrapper');
  }

  toggleWrapper() {
    this.store.dispatch(toggleWrapper());
    this.wrapper$.subscribe((value) => console.log(value));
  }

  ngOnInit() {}
}
