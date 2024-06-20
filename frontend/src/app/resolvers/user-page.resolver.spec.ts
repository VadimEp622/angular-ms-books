import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userPageResolver } from './user-page.resolver';

describe('userPageResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userPageResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
