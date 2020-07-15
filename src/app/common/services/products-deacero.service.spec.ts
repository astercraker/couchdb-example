import { TestBed } from '@angular/core/testing';

import { ProductsDeaceroService } from './products-deacero.service';

describe('ProductsDeaceroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsDeaceroService = TestBed.get(ProductsDeaceroService);
    expect(service).toBeTruthy();
  });
});
