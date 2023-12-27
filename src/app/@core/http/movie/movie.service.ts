import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class MovieService {
    api: string = 'http://www.omdbapi.com';
    API_KEY = "e8067b53";

    constructor(
      private _http: HttpClient,
    ) { }
  
    getMovies(term: string): Observable<any> {
      const params = { params: new HttpParams().set("search", term)};
      return this._http.get(`${this.api}/?s=` + term + '&apikey=' + this.API_KEY, params);
    }
}