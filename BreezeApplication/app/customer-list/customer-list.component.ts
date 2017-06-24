import { Component, OnInit } from '@angular/core';
import { CustomerRepositoryService } from './customer-repository.service';

@Component({
  selector: 'yo-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: any[];
  constructor(private _customerRepo: CustomerRepositoryService) { }

  ngOnInit() {
    this._customerRepo.getcustomers().subscribe(customer => this.customers = customer);
  }

}
