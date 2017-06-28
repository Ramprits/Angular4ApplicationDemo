import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { CustomerRepositoryService } from './customer-list/customer-repository.service';

@Injectable()
export class CustomerGuard implements CanActivate {

    constructor(private customerService: CustomerRepositoryService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const customerExists = !!this.customerService.getcustomer(+route.params['customerId']);
        if (!customerExists) {
            this.router.navigate(['/**']);
        }
        return customerExists;
    }
}
