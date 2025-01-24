import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ResumeComponent } from './resume/resume/resume.component';
import { HomeComponent } from './home/home/home.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { WorkExperienceComponent } from './work-experience/work-experience/work-experience.component';
import { CodeExamplesComponent } from './code-examples/code-examples/code-examples.component';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    CertificatesComponent,
    WorkExperienceComponent,
    CodeExamplesComponent,
    BrowserModule,
    CoreModule,
    NgbCarousel,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
