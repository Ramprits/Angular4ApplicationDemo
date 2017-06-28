import { TestBed, async, inject } from '@angular/core/testing';

import { EventRouteGuard } from './event-route.guard';

describe('EventRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteGuard]
    });
  });

  it('should ...', inject([EventRouteGuard], (guard: EventRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
