import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) {
  }

  readonly ROOT_URL = '';
  data: Observable<any>;

  private static handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }
  //
  // getFilm(filmUrl: string): Observable<any> {
  //   return this.http.get<any>(filmUrl);
  // }
  get(url: string) {
    return this.http.get<any>(url).pipe(catchError(StarwarsService.handleError));
  }

  getCategories() {
    return this.http.get<any>(this.ROOT_URL).pipe(catchError(StarwarsService.handleError));
  }

  getItemsByCategory(cat: string): Observable<any> {
    return this.http.get<any>(this.ROOT_URL + cat).pipe(catchError(StarwarsService.handleError));
  }

  getDetailsByItem(cat: string, itemid: string): Observable<any> {
    return this.http.get<any>(this.ROOT_URL + cat + '/' + itemid).pipe(catchError(StarwarsService.handleError));
  }
}
