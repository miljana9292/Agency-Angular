import { TestBed } from '@angular/core/testing';

import { OnamaService } from './onama.service';

describe('OnamaService', () => {
  let service: OnamaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnamaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
