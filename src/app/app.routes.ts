import { Routes } from '@angular/router';
import { AppModule } from './app.module';
import { ResumeComponent } from './resume/resume/resume.component';
import { CodeExamplesComponent } from './code-examples/code-examples/code-examples.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { WorkExperienceComponent } from './work-experience/work-experience/work-experience.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'code-examples', component: CodeExamplesComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'work-experience', component: WorkExperienceComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
