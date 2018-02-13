import { TestBed, inject } from '@angular/core/testing';

import { HandBookCommentServiceService } from './hand-book-comment-service.service';

describe('HandBookCommentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandBookCommentServiceService]
    });
  });

  it('should be created', inject([HandBookCommentServiceService], (service: HandBookCommentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
