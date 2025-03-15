import { Routes } from '@angular/router';
import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MyMoneyTrackerComponent } from './mymoneytracker/mymoneytracker/mymoneytracker.component';
import { GtwrappedComponent } from './gtwrapped/gtwrapped/gtwrapped.component';
import { HealthtrackerComponent } from './healthtracker/healthtracker/healthtracker.component';
import { NextjsdashboardComponent } from './nextjsdashboard/nextjsdashboard/nextjsdashboard.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'mymoneytracker', component: MyMoneyTrackerComponent },
  { path: 'gtwrapped', component: GtwrappedComponent },
  { path: 'healthtracker', component: HealthtrackerComponent },
  { path: 'nextjsdashboard', component: NextjsdashboardComponent },

  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];
