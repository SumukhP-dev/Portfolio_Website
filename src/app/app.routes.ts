import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { CarlaAiAutopilotComponent } from './ai-dev/carla-ai-autopilot/carla-ai-autopilot.component';
import { AherosjourneyComponent } from './game-dev/a-heros-journey/a-heros-journey.component';
import { AverysadventureComponent } from './game-dev/averys-adventure/averys-adventure.component';
import { BallrollingComponent } from './game-dev/ball-rolling/ball-rolling.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { GtwrappedComponent } from './web-app-dev/gt-wrapped/gt-wrapped.component';
import { HealthtrackerComponent } from './web-app-dev/health-tracker/health-tracker.component';
import { MyMoneyTrackerComponent } from './web-app-dev/my-money-tracker/my-money-tracker.component';
import { NextjsdashboardComponent } from './web-app-dev/nextjs-dashboard/nextjs-dashboard.component';
import { WeathernowComponent } from './ai-dev/weather-now/weather-now.component';
import { HealthcarePolicyImpactTrackerComponent } from './ai-dev/healthcare-policy-impact-tracker/healthcare-policy-impact-tracker.component';
import { ApacheTomcatWebApplicationServerComponent } from './web-server-crawler-dev/apache-tomcat-web-application-server/apache-tomcat-web-application-server.component';
import { GtmobisimMobileTraceGenerationComponent } from './web-server-crawler-dev/gtmobisim-mobile-trace-generation/gtmobisim-mobile-trace-generation.component';
import { NutchWebCrawlerWithMemcachedserverComponent } from './web-server-crawler-dev/nutch-web-crawler-with-memcachedserver/nutch-web-crawler-with-memcachedserver.component';
import { VotingLedgerFabricApplicationComponent } from './web-server-crawler-dev/voting-ledger-fabric-application/voting-ledger-fabric-application.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mymoneytracker', component: MyMoneyTrackerComponent },
  { path: 'gtwrapped', component: GtwrappedComponent },
  { path: 'healthtracker', component: HealthtrackerComponent },
  { path: 'nextjsdashboard', component: NextjsdashboardComponent },
  { path: 'weathernow', component: WeathernowComponent },
  { path: 'aherosjourney', component: AherosjourneyComponent },
  { path: 'ballrolling', component: BallrollingComponent },
  { path: 'averysadventure', component: AverysadventureComponent },
  {
    path: 'healthcarepolicyimpacttracker',
    component: HealthcarePolicyImpactTrackerComponent,
  },
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
