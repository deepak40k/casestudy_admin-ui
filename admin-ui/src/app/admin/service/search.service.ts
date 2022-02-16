import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchResponse } from "../model/search-response";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl =  environment.baseUrl;

  constructor(private http: HttpClient) { }

  searchProfiles(criretia: String,value:String): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(this.baseUrl + '/api/v1/admin/'+criretia+'/'+value)
    .pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
     'Something bad happened; please try again later.');
  }

}


