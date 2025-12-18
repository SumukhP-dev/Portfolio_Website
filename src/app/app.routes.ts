import { Routes } from '@angular/router';
import { ApacheTomcatWebApplicationServerComponent } from './backend-infrastructure-projects/apache-tomcat-web-application-server/apache-tomcat-web-application-server.component';
import { PaymentApiWithValidationEngineComponent } from './backend-infrastructure-projects/payment-api-with-validation-engine/payment-api-with-validation-engine.component';
import { VotingLedgerFabricApplicationComponent } from './backend-infrastructure-projects/voting-ledger-fabric-application/voting-ledger-fabric-application.component';
import { HomeComponent } from './home/home.component';
import { CarlaAiAutopilotComponent } from './misc-projects/carla-ai-autopilot/carla-ai-autopilot.component';
import { GtmobisimMobileTraceGenerationComponent } from './misc-projects/gtmobisim-mobile-trace-generation/gtmobisim-mobile-trace-generation.component';
import { NutchWebCrawlerWithMemcachedServerComponent } from './misc-projects/nutch-web-crawler-with-memcached-server/nutch-web-crawler-with-memcached-server.component';
import { MyMoneyTrackerComponent } from './mobile-app-projects/my-money-tracker/my-money-tracker.component';
import { WordleWeekComponent } from './mobile-app-projects/wordle-week/wordle-week.component';
import { ProjectsResolver } from './resolvers/projects.resolver';
import { StartComponent } from './start/start.component';
import { HealthcarePolicyImpactTrackerComponent } from './web-data-science-projects/healthcare-policy-impact-tracker/healthcare-policy-impact-tracker.component';
import { NextjsdashboardComponent } from './web-data-science-projects/nextjs-dashboard/nextjs-dashboard.component';
import { WeathernowComponent } from './web-data-science-projects/weather-now/weather-now.component';
import { GTWrappedComponent } from './mobile-app-projects/gt-wrapped/gt-wrapped.component';
import { HealthTrackerComponent } from './mobile-app-projects/health-tracker/health-tracker.component';
import { RealTimeVoiceTranslationComponent } from './web-data-science-projects/real-time-voice-translation/real-time-voice-translation.component';
import { DreamFlowAiPlatformComponent } from './mobile-app-projects/dream-flow-ai-platform/dream-flow-ai-platform.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: { projects: ProjectsResolver },
  },
  { path: 'mymoneytracker', component: MyMoneyTrackerComponent },
  { path: 'gtwrapped', component: GTWrappedComponent },
  { path: 'healthtracker', component: HealthTrackerComponent },
  { path: 'nextjsdashboard', component: NextjsdashboardComponent },
  { path: 'dream-flow-ai-platform', component: DreamFlowAiPlatformComponent },
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
    component: NutchWebCrawlerWithMemcachedServerComponent,
  },
  {
    path: 'votingledgerfabricapplication',
    component: VotingLedgerFabricApplicationComponent,
  },
  {
    path: 'csgo-voice-translation',
    component: RealTimeVoiceTranslationComponent,
  },
  // Legacy paths kept as redirects so old links still work
  {
    path: 'wordleweek',
    redirectTo: 'csgo-voice-translation',
    pathMatch: 'full',
  },
  {
    path: 'weathernow',
    redirectTo: 'nextjsdashboard',
    pathMatch: 'full',
  },
  {
    path: 'paymentapiwithvalidationengine',
    component: PaymentApiWithValidationEngineComponent,
  },

  { path: '', component: StartComponent },
  { path: '**', component: HomeComponent },
];
