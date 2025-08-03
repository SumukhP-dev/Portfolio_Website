import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CarlaAiAutopilotComponent } from './embedded-dev/carla-ai-autopilot/carla-ai-autopilot.component';
import { AherosjourneyComponent } from './game-dev/a-heros-journey/a-heros-journey.component';
import { AverysadventureComponent } from './game-dev/averys-adventure/averys-adventure.component';
import { BallrollingComponent } from './game-dev/ball-rolling/ball-rolling.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { StartComponent } from './start/start.component';
import { GtwrappedComponent } from './web-app-dev/gt-wrapped/gt-wrapped.component';
import { HealthtrackerComponent } from './web-app-dev/health-tracker/health-tracker.component';
import { MyMoneyTrackerComponent } from './web-app-dev/my-money-tracker/my-money-tracker.component';
import { NextjsdashboardComponent } from './web-app-dev/nextjs-dashboard/nextjs-dashboard.component';
import { WeathernowComponent } from './web-app-dev/weather-now/weather-now.component';
import { ApacheTomcatWebApplicationServerComponent } from './internet-tech-dev/apache-tomcat-web-application-server/apache-tomcat-web-application-server.component';
import { GtmobisimMobileTraceGenerationComponent } from './internet-tech-dev/gtmobisim-mobile-trace-generation/gtmobisim-mobile-trace-generation.component';
import { NutchWebCrawlerWithMemcachedserverComponent } from './internet-tech-dev/nutch-web-crawler-with-memcachedserver/nutch-web-crawler-with-memcachedserver.component';
import { VotingLedgerFabricApplicationComponent } from './internet-tech-dev/voting-ledger-fabric-application/voting-ledger-fabric-application.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'mymoneytracker', component: MyMoneyTrackerComponent },
  { path: 'gtwrapped', component: GtwrappedComponent },
  { path: 'healthtracker', component: HealthtrackerComponent },
  { path: 'nextjsdashboard', component: NextjsdashboardComponent },
  { path: 'weathernow', component: WeathernowComponent },
  { path: 'aherosjourney', component: AherosjourneyComponent },
  { path: 'ballrolling', component: BallrollingComponent },
  { path: 'averysadventure', component: AverysadventureComponent },
  { path: 'carlaaiautopilot', component: CarlaAiAutopilotComponent },
  {
    path: 'apachetomcatwebapplicationserver',
    component: ApacheTomcatWebApplicationServerComponent,
  },
  {
    path: 'gtmobisimmobiletracegeneration',
    component: GtmobisimMobileTraceGenerationComponent,
  },
  {
    path: 'nutchwebcrawlerwithmemcachedserver',
    component: NutchWebCrawlerWithMemcachedserverComponent,
  },
  {
    path: 'votingledgerfabricapplication',
    component: VotingLedgerFabricApplicationComponent,
  },

  { path: '', component: StartComponent },
  { path: '**', component: PageNotFoundComponent },
];
