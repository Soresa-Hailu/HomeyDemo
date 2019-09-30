import { TestBed } from '@angular/core/testing';

import { HomierService } from './homier.service';

describe('HomierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomierService = TestBed.get(HomierService);
    expect(service).toBeTruthy();
  });
});
