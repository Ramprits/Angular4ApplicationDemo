import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { CustomerRepositoryService } from '../customer-list/customer-repository.service';
import { Icustomer } from '../../model/icustomer';

@Component({
  selector: 'yo-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customers: Icustomer;
  errorMessege: any;
  title = 'Add Customer';
  customer: FormGroup;
  errorMessage: any;
  constructor(private fb: FormBuilder,
    private customerService: CustomerRepositoryService,
    private router: Router) {
    this.customer = fb.group({
      'name': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      'email': [null, Validators.required],
      'phone': [null, [Validators.required, Validators.minLength(10)]],
    });
  }

  AddCustomer(customer): void {
    if (this.customer.dirty && this.customer.valid) {
      this.customerService.createCustomer(customer)
        .subscribe(customers => this.customers = customers,
        Error => this.errorMessege = <any>Error);
      this.router.navigateByUrl('/customers');
      this.ngOnInit();
    };
  }
  ngOnInit(): void {
    this.customerService.getcustomers();
  }
}
