import { TestBed } from '@angular/core/testing';

import { DynamicCenteredModalService } from './dynamic-centered-modal.service';

describe('DynamicCenteredModalService', () => {
  let service: DynamicCenteredModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicCenteredModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
