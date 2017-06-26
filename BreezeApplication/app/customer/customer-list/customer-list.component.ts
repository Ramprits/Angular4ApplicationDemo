import { Icustomer } from './../../model/icustomer';
import { Component, OnInit } from '@angular/core';
import { CustomerRepositoryService } from './customer-repository.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'yo-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customer: any;
  listFilter: string;
  errorMessage: any;
  customers: Array<Icustomer>;
  model: any;
  constructor(private _customerRepo: CustomerRepositoryService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.listFilter = this.router.snapshot.queryParams['filterBy'] || '';
    this._customerRepo.getcustomers().
      subscribe(customer => this.customers = customer, error => this.errorMessage = <any>error);
    this.router.paramMap.subscribe(params => {
      const id = params['customerId'];

      this._customerRepo.deleteCustomer(id);
    });
  }
  EditCustomer(): void {
  }


}

