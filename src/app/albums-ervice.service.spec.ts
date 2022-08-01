import { TestBed } from '@angular/core/testing';

import { AlbumsERVICEService } from './albums-ervice.service';

describe('AlbumsERVICEService', () => {
  let service: AlbumsERVICEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsERVICEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
