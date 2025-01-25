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
import { Store } from '@ngrx/store';
import { setWrapper } from '../../../app.state';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    RouterOutlet,
    DropdownDirective,
    HostComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  wrapper = true;

  constructor(private store: Store<{ wrapper: boolean }>) {}

  ngOnInit() {}

  sendDataToStore() {
    setWrapper(this.wrapper);
    this.store.dispatch(setWrapper(this.wrapper));
  }

  toggleWrapper() {
    this.wrapper = false;
  }
}
