import { TestBed } from '@angular/core/testing';

import { AuthAgentGuardService } from './auth-agent-guard.service';

describe('AuthAgentGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAgentGuardService = TestBed.get(AuthAgentGuardService);
    expect(service).toBeTruthy();
  });
});
