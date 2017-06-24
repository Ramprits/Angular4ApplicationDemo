import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerRepositoryService {
  constructor(private http: Http) { }
  // tslint:disable-next-line:member-ordering
  private Base_Url = 'http://localhost:53369/api/Customers';
  getcustomers(): Observable<any[]> {
    return this.http.get(this.Base_Url)
      .map((response: Response) => response.json());
  }
}
