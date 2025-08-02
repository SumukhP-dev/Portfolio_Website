import { Routes } from '@angular/router';
import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { MyMoneyTrackerComponent } from './my-money-tracker/my-money-tracker.component';
import { GtwrappedComponent } from './gt-wrapped/gt-wrapped.component';
import { HealthtrackerComponent } from './health-tracker/health-tracker.component';
import { NextjsdashboardComponent } from './nextjs-dashboard/nextjs-dashboard.component';
import { WeathernowComponent } from './weather-now/weather-now.component';
import { StartComponent } from './start/start.component';
import { AherosjourneyComponent } from './a-heros-journey/a-heros-journey.component';
import { BallrollinggameComponent } from './ball-rolling-game/ball-rolling-game.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'mymoneytracker', component: MyMoneyTrackerComponent },
  { path: 'gtwrapped', component: GtwrappedComponent },
  { path: 'healthtracker', component: HealthtrackerComponent },
  { path: 'nextjsdashboard', component: NextjsdashboardComponent },
  { path: 'weathernow', component: WeathernowComponent },
  { path: 'aherosjourney', component: AherosjourneyComponent },
  { path: 'ballrollinggame', component: BallrollinggameComponent },

  { path: '', component: StartComponent },
  { path: '**', component: PageNotFoundComponent },
];
