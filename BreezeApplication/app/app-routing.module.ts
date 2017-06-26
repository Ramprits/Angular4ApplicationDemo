import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { AddCustomerComponent } from './customer//add-customer/add-customer.component';
import { PathNotFoundComponent } from './PathNotFoundComponent';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:customerId', component: CustomerDetailComponent },
  { path: 'AddCustomer', component: AddCustomerComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
