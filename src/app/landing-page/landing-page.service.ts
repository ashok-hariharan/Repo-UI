import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private _http:Http) { }
  baseUrl: string = environment.baseUrl;
  private _getUserIDs = this.baseUrl + "getRepos/";
  private _starRepos = this.baseUrl + "starRepos/";
  private _unstarRepos = this.baseUrl + "unStarRepos/";


  // get user names
  getUser(userId){
   return this._http.get(this._getUserIDs.concat(userId))
    .pipe(map(response=>response.json()))
  }

   // set stars 
   setStars(userId,reponame){
   return this._http.put(this._starRepos+'/'+userId+'/'+reponame,"")
    .pipe(map(response=>response.json()))
  }

   // unset stars
   unsetStars(userId,reponame){
   return this._http.delete(this._unstarRepos+'/'+userId+'/'+reponame)
    .pipe(map(response=>response.json()))
  }
}
