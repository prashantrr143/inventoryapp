import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES} from './mock-heroes';
import {Observable ,of} from  'rxjs'
import {HttpClient, HttpHeaders} from  '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = "http://localhost:10001/api/v1/heroes"
  constructor(private http : HttpClient) { }


// Method exposed by this service
//  getHeroes() : Observable<Hero[]>{
//    return of(HEROES);
//  }

  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl).pipe(
      catchError(this.handleError('getHeroes',[]))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
