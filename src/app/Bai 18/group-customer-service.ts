import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { retry } from 'rxjs/internal/operators/retry';

@Injectable({
  providedIn: 'root'
})
export class GroupCustomerService {
    private _url: string = "/assets/data/customers.json";

  constructor(private _http: HttpClient) { }

  getGroupCustomers(): Observable<any> {
    return this._http.get<any>(this._url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}
