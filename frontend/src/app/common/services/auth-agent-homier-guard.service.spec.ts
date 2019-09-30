import { TestBed } from '@angular/core/testing';

import { AuthAgentHomierGuardService } from './auth-agent-homier-guard.service';

describe('AuthAgentHomierGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAgentHomierGuardService = TestBed.get(AuthAgentHomierGuardService);
    expect(service).toBeTruthy();
  });
});
