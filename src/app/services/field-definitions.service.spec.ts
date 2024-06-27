import { TestBed } from '@angular/core/testing';

import { FieldDefinitionsService } from './field-definitions.service';

describe('FieldDefinitionsService', () => {
  let service: FieldDefinitionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldDefinitionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
