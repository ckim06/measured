import { TestBed } from '@angular/core/testing';

import { DashboardFacade} from './dashboard.facade';

describe('DashboardService', () => {
  let service: DashboardFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
