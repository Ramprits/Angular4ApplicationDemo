import { TestBed, inject } from '@angular/core/testing';

import { CustomerRepositoryService } from './customer-repository.service';

describe('CustomerRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerRepositoryService]
    });
  });

  it('should be created', inject([CustomerRepositoryService], (service: CustomerRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
