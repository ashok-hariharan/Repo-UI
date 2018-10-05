import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LandingPageComponent } from './landing-page.component';
import { ListRepoModule } from '../list-repo/list-repo.module';
import { LandingPageService } from './landing-page.service';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ListRepoModule
  ],
  declarations: [LandingPageComponent],
  providers:[LandingPageService],
  exports:[LandingPageComponent]
})
export class LandingPageModule { }
