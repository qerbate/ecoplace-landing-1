import {Injectable} from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Contact } from './contact';
import { Statistic } from './statistic';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
const apiUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


getContact(): Observable<Contact[]> {
  return this.http.get<Contact[]>(`${apiUrl}`)
    .pipe(
      tap(contact => console.log('fetched contact')),
      catchError(this.handleError('getContact', []))
    );
}

getContactById(id: string): Observable<Contact> {
  const url = `${apiUrl}/${id}`;
  return this.http.get<Contact>(url).pipe(
    tap(_ => console.log(`fetched contact id=${id}`)),
    catchError(this.handleError<Contact>(`getContactById id=${id}`))
  );
}

addContact(contact: Contact): Observable<Contact> {
  return this.http.post<Contact>(apiUrl, contact, httpOptions).pipe(
    tap((c: Contact) => console.log(`added product w/ id=${c._id}`)),
    catchError(this.handleError<Contact>('addContact'))
  );
}

updateContact(id: string, contact: Contact): Observable<any> {
  const url = `${apiUrl}/${id}`;
  return this.http.put(url, contact, httpOptions).pipe(
    tap(_ => console.log(`updated contact id=${id}`)),
    catchError(this.handleError<any>('updateContact'))
  );
}

deleteContact(id: string): Observable<Contact> {
  const url = `${apiUrl}/${id}`;
  return this.http.delete<Contact>(url, httpOptions).pipe(
    tap(_ => console.log(`deleted contact id=${id}`)),
    catchError(this.handleError<Contact>('deleteContact'))
  );
}

getStatistic(status: string): Observable<Statistic> {
  const url = `${apiUrl}/daily/${status}`;
  return this.http.get<Statistic>(url).pipe(
    tap(_ => console.log(`fetched statistic status=${status}`)),
    catchError(this.handleError<Statistic>(`getStatistic status=${status}`))
  );
}
}
