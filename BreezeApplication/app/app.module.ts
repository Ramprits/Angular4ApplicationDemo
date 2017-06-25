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
import { CustomerListComponent } from './customer-list/customer-list.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CustomerRepositoryService } from './customer-list/customer-repository.service';
import { BreezeBridgeAngularModule } from 'breeze-bridge-angular';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { PathNotFoundComponent } from './PathNotFoundComponent';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCustomerComponent,
    PathNotFoundComponent
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
  providers: [CustomerRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
