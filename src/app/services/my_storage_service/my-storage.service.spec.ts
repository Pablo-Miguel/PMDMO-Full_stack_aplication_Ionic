import { TestBed } from '@angular/core/testing';

import { MyStorageService } from './my-storage.service';

describe('MyStorageService', () => {
  let service: MyStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
