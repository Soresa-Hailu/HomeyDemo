import { TestBed } from '@angular/core/testing';

import { ImageAlbumService } from './image-album.service';

describe('ImageAlbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageAlbumService = TestBed.get(ImageAlbumService);
    expect(service).toBeTruthy();
  });
});
