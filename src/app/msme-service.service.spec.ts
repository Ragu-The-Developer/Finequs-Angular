import { TestBed } from '@angular/core/testing';

import { MsmeServiceService } from './msme-service.service';

describe('MsmeServiceService', () => {
  let service: MsmeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsmeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
