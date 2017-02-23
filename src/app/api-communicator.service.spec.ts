/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiCommunicatorService } from './api-communicator.service';

describe('Service: ApiCommunicator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCommunicatorService]
    });
  });

  it('should ...', inject([ApiCommunicatorService], (service: ApiCommunicatorService) => {
    expect(service).toBeTruthy();
  }));
});
