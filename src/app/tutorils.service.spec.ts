import { TestBed } from '@angular/core/testing';

import { TutorilsService } from './tutorils.service';

describe('TutorilsService', () => {
  let service: TutorilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
