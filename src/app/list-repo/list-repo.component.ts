import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-repo',
  templateUrl: './list-repo.component.html',
  styleUrls: ['./list-repo.component.css']
})
export class ListRepoComponent implements OnInit {
  headings:any=[];
  constructor() { }

  ngOnInit() {
    this.headings=["Repository Name","Created Date","Stars","Action"];
  }

}
