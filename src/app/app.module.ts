import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListRepoModule } from './list-repo/list-repo.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { LandingPageService } from './landing-page/landing-page.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
   // ListRepoModule
  ],
 // providers: [LandingPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
