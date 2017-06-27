import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'yo-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: any;

  constructor(private _eventService: EventService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.event = this._eventService.getEvent(+this.router.snapshot.params['id']);
  }

}
