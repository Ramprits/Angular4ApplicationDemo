import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CustomerRepositoryService } from './customer/customer-list/customer-repository.service';
import { BreezeBridgeAngularModule } from 'breeze-bridge-angular';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { PathNotFoundComponent } from './PathNotFoundComponent';
import { ToastrService } from './shared/toastr.service';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCustomerComponent,
    PathNotFoundComponent,
    CustomerDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    BreezeBridgeAngularModule,
    ReactiveFormsModule
  ],
  providers: [CustomerRepositoryService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
