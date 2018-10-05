import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _service:LandingPageService) { }

  ngOnInit() {
  }
repoData: any[]=[];
repoColumns:any=[];
userid:string="";
//searching data
  search(userid){
    this._service.getUser(userid).subscribe(data=>{
      this.repoData=data;
      console.log(this.repoData)
    })
  }
}
