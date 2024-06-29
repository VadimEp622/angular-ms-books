import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bookIndexResolver } from './book-index.resolver';

describe('bookIndexResolver', () => {
  const executeResolver: ResolveFn<any> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => bookIndexResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
