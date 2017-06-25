import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'yo-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customer: FormGroup;
  errorMessage: any;
  constructor(private fb: FormBuilder) {
    this.customer = fb.group({
      'name': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      'email': [null, Validators.required],
      'phone': [null, Validators.required],
    });
  }
  ngOnInit() {
  }
  AddCustomer(data): void {
    console.log(data);
  }

}
