import { Routes } from '@angular/router';
import { AppModule } from './app.module';
import { ResumeComponent } from './resume/resume/resume.component';
import { CodeExamplesComponent } from './code-examples/code-examples/code-examples.component';
import { CertficatesComponent } from './certficates/certficates/certficates.component';
import { WorkExperienceComponent } from './work-experience/work-experience/work-experience.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: AppModule },
  { path: 'resume', component: ResumeComponent },
  { path: 'code-examples', component: CodeExamplesComponent },
  { path: 'certificates', component: CertficatesComponent },
  { path: 'work-experience', component: WorkExperienceComponent },

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];
