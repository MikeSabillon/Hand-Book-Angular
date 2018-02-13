import { TestBed, inject } from '@angular/core/testing';

import { HandBookPostService } from './hand-book-post.service';

describe('HandBookPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandBookPostService]
    });
  });

  it('should be created', inject([HandBookPostService], (service: HandBookPostService) => {
    expect(service).toBeTruthy();
  }));
});
