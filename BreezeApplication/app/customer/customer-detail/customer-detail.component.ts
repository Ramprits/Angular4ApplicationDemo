import { Component, OnInit } from '@angular/core';
import { CustomerRepositoryService } from '../customer-list/customer-repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Icustomer } from '../../model/icustomer';
import { Subscription } from 'rxjs/Subscription';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'customer-Detail',
    templateUrl: 'customer-detail.component.html'
})

export class EmployeeDetailComponent implements OnInit {
    customer: Icustomer;
    sub: Subscription;
    constructor(private _customerService: CustomerRepositoryService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(
            params => {
                const customerId = +params['customerId'];
                this.getCustomer(customerId);
            });
    }
    getCustomer(customerId: number) {
        this._customerService.getcustomer(customerId).subscribe(customer => this.customer = customer);
    }
}
