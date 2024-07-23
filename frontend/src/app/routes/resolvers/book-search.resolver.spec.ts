import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bookSearchResolver } from './book-search.resolver';

describe('bookSearchResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => bookSearchResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
