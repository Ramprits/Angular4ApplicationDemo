import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
  <div class="offset-2">
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-5">
      <event-thumbnail  (click)="eventName(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: any[]
  constructor(private eventService: EventService, private toastr: ToastrService) {
  }
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  eventName(data): void {
    alert(data);
  }

}
