import { TestBed } from '@angular/core/testing';

import { RealtorService } from './realtor.service';

describe('RealtorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealtorService = TestBed.get(RealtorService);
    expect(service).toBeTruthy();
  });
});
