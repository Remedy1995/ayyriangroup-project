import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface User {
  id: number,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    },
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    },
    email: string,
    name: string,
    phone: string,
    username: string,
    website: string
  }
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log('there was an error', error)
    return throwError('An error occured')
  }



}
