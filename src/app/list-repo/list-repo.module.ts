import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRepoComponent } from './list-repo.component';
import { LandingPageService } from '../landing-page/landing-page.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListRepoComponent],
  //providers:[LandingPageService],
  exports:[ListRepoComponent]
})
export class ListRepoModule { }
