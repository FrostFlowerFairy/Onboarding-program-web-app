import { TestBed } from '@angular/core/testing';

import { TxService } from './tx.service';

describe('TxService', () => {
  let service: TxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
