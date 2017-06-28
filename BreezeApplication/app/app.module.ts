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
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeDetailComponent } from './customer/customer-detail/customer-detail.component';
import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventRouteGuard } from './events/shared/event-CanActivateRoute';
import { CustomerGuard } from './customer/customer-RouteGard';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AddCustomerComponent,
    PathNotFoundComponent,
    EmployeeDetailComponent,
    WelcomeComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent
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
  providers: [CustomerRepositoryService, ToastrService,
    EventService,
    EventRouteGuard,
    CustomerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
