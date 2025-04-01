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
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
