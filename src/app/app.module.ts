import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { wrapperFeature } from './app.state';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    BrowserModule,
    CoreModule,
    NgbCarousel,
    RouterModule.forRoot(routes),
    StoreModule.forFeature(wrapperFeature),
    FormsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
