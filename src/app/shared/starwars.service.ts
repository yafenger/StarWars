import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  // baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getItemsByCategory(cat: string): Observable<any> {
    return this.httpClient.get<any>('/api/' + cat)
      .pipe(catchError(this.handleError));
  }
  getItemDetialsByItem(cat:string,itemid:string):Observable<any> {
    return this.httpClient.get<any>('/api/'+cat+'/'+itemid)
      .pipe(catchError(this.handleError));
  }
  // getRelatedItem(relateditem:string):Observable<any> {
  //   return this.httpClient.get<any>('/api/'+relateditem)
  //     .pipe(catchError(this.handleError));
  // }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }
}
