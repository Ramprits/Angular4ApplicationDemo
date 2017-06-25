import { Icustomer } from './../../model/icustomer';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class CustomerRepositoryService {
  private headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http) { }
  // tslint:disable-next-line:member-ordering
  private Base_Url = 'http://localhost:53369/api/Customers';
  getcustomers(): Observable<Icustomer[]> {
    return this.http.get(this.Base_Url)
      .map((response: Response) => response.json());
  }
  getcustomer(customerId: number): Observable<Icustomer> {
    const url = `${this.Base_Url}/${customerId}`;
    return this.http.get(url)
      .map((response: Response) => response.json());
  }

  createCustomer(customer: Icustomer): Observable<Icustomer> {
    return this.http
      .post(this.Base_Url, JSON.stringify(customer), { headers: this.headers })
      .map((response: Response) => response.json());
  }
}
