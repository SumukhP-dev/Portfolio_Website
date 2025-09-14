import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  model,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
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
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CoreModule, HostComponent, CommonModule],
  templateUrl: './start.component.html',
})
export class StartComponent implements OnInit {
  store: Store<{ wrapper: boolean }>;
  cRef: ChangeDetectorRef;
  wrapper$: Observable<boolean> | undefined;
  wrapper: any;
  router: Router;

  constructor(
    store: Store<{ wrapper: boolean }>,
    cRef: ChangeDetectorRef,
    router: Router
  ) {
    this.store = store;
    this.cRef = cRef;
    this.router = router;
  }
  ngOnInit(): void {
    // this.router.navigate(['/home']);

    this.wrapper$ = this.store.select(selectWrapper);

    setTimeout(() => {
      this.wrapper$ = this.store.select(selectWrapper);
      // this.wrapper$.subscribe((value) => {
      //   console.log(value);
      // });
    }, 3000);
  }

  ngAfterViewInit(): void {
    this.addChild();
  }

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  vcr!: ViewContainerRef;
  ref!: ComponentRef<HomeComponent>;

  addChild() {
    this.ref = this.vcr.createComponent(HomeComponent);
  }

  removeChild() {
    const index = this.vcr.indexOf(this.ref.hostView);
    if (index != -1) this.vcr.remove(index);
  }
}
