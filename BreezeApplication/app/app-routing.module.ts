import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { AddCustomerComponent } from './customer//add-customer/add-customer.component';
import { PathNotFoundComponent } from './PathNotFoundComponent';
import { EmployeeDetailComponent } from './customer/customer-detail/customer-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventRouteGuard } from './events/shared/event-CanActivateRoute';
import { CustomerGuard } from './customer/customer-RouteGard';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:customerId', component: EmployeeDetailComponent, canActivate: [CustomerGuard] },
  { path: 'AddCustomer', component: AddCustomerComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteGuard] },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
