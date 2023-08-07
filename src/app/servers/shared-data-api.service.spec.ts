import { TestBed } from '@angular/core/testing';

import { SharedDataApiService } from './shared-data-api.service';

describe('SharedDataApiService', () => {
  let service: SharedDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
