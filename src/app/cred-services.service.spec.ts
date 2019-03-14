import { TestBed } from '@angular/core/testing';

import { CredServicesService } from './cred-services.service';

describe('CredServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CredServicesService = TestBed.get(CredServicesService);
    expect(service).toBeTruthy();
  });
});
