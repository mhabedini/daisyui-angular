import { TestBed } from '@angular/core/testing';

import { DaisyuiAngularService } from './daisyui-angular.service';

describe('DaisyuiAngularService', () => {
  let service: DaisyuiAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaisyuiAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
