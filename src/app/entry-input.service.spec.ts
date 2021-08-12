import { TestBed } from '@angular/core/testing';

import { EntryInputService } from './entry-input.service';

describe('EntryInputService', () => {
  let service: EntryInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
