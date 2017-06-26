import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { AddCustomerComponent } from './customer//add-customer/add-customer.component';
import { PathNotFoundComponent } from './PathNotFoundComponent';
import { EmployeeDetailComponent } from './customer/customer-detail/customer-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventsListComponent } from './events/events-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:customerId', component: EmployeeDetailComponent },
  { path: 'AddCustomer', component: AddCustomerComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
