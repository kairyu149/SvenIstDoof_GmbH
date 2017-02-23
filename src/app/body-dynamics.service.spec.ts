/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BodyDynamicsService } from './body-dynamics.service';

describe('Service: BodyDynamics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodyDynamicsService]
    });
  });

  it('should ...', inject([BodyDynamicsService], (service: BodyDynamicsService) => {
    expect(service).toBeTruthy();
  }));
});
