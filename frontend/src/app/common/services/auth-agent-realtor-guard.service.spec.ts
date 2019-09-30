import { TestBed } from '@angular/core/testing';

import { AuthAgentRealtorGuardService } from './auth-agent-realtor-guard.service';

describe('AuthAgentRealtorGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAgentRealtorGuardService = TestBed.get(AuthAgentRealtorGuardService);
    expect(service).toBeTruthy();
  });
});
