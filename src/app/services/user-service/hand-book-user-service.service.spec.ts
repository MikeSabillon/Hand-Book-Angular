import { TestBed, inject } from '@angular/core/testing';

import { HandBookUserServiceService } from './hand-book-user-service.service';

describe('HandBookUserServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandBookUserServiceService]
    });
  });

  it('should be created', inject([HandBookUserServiceService], (service: HandBookUserServiceService) => {
    expect(service).toBeTruthy();
  }));
});
