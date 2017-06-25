import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { AddCustomerComponent } from './customer//add-customer/add-customer.component';
import { PathNotFoundComponent } from './PathNotFoundComponent';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'AddCustomer', component: AddCustomerComponent },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
