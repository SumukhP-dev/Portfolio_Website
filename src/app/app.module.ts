import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ResumeComponent } from './resume/resume/resume.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [],
  imports: [AppComponent, HomeComponent, ResumeComponent, BrowserModule, CoreModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
