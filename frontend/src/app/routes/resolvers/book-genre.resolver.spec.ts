import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { bookGenreResolver } from './book-genre.resolver';

describe('bookGenreResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => bookGenreResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
