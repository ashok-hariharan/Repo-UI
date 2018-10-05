import { Component, OnInit, Input } from '@angular/core';
import { LandingPageService } from '../landing-page/landing-page.service';

@Component({
  selector: 'app-list-repo',
  templateUrl: './list-repo.component.html',
  styleUrls: ['./list-repo.component.css']
})
export class ListRepoComponent implements OnInit {
  //headings: any = [];
  //resultData: any = [];
  //userName: any = "";
  @Input() repoData: any[];
  @Input() username: string;
  constructor(private _service: LandingPageService) {
  }

  ngOnInit() {
    // this.headings = ["Repository Name", "Created Date", "Stars", "Action"];
    //this.userName = "ashok-hariharan";
    //this.resultData=null;
  }
  displayTable: boolean;
  repoColumns: any = [];
  ngOnChanges() {
    if (this.repoData.length) {
      this.displayTable = true;
      this.repoColumns = Object.keys(this.repoData[0])
    }
    else {
      this.displayTable = false
    }

  }

  // add star
  starRepo(reponame) {
    this._service.setStars(this.username, reponame).subscribe(data => {
      console.log(data);
    }).add(data => {
      this._service.getUser(this.username).subscribe(data => {
        this.repoData = data;
      })
    })
  }
  // remove star
  unstarRepo(reponame) {
    this._service.unsetStars(this.username, reponame).subscribe(data => {
      console.log(data);
    }).add(data => {
      this._service.getUser(this.username).subscribe(data => {
        this.repoData = data;
      })
    })
  }
}
