import { Routes } from '@angular/router';
import { AppModule } from './app.module';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { CodeExamplesComponent } from './code-examples/code-examples.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'code-examples', component: CodeExamplesComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'work-experience', component: WorkExperienceComponent },

  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];
