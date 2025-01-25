import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './app.state';
import { CertificatesComponent } from './certificates/certificates.component';
import { CodeExamplesComponent } from './code-examples/code-examples.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
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
    StoreModule.forRoot({ data: dataReducer }),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
