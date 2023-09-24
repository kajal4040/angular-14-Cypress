import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('SharedService', () => {
  let service: SharedService;
  let httpTestingController: HttpTestingController; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SharedService);
    httpTestingController = TestBed.inject(HttpTestingController); // Inject HttpTestingController
  });

  it('should be created', () => {
    const mockData = '';
    // spyOn(service, 'getUsers').and.returnValue(of(mockData));
    expect(service).toBeTruthy();
  });
});
