import { TestBed } from '@angular/core/testing';

import { RecettesService } from '../recettes/recettes.service';

describe('RecettesService', () => {
  let service: RecettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
