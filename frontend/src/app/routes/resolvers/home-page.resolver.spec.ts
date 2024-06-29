import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { homePageResolver } from './home-page.resolver';

describe('homePageResolver', () => {
  const executeResolver: ResolveFn<any[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => homePageResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
