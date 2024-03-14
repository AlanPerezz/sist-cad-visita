import { TestBed } from '@angular/core/testing';

import { VisitanteServiceService } from './visitante-service.service';

describe('VisitanteServiceService', () => {
  let service: VisitanteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitanteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
