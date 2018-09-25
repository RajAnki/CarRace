import { TestBed, inject } from '@angular/core/testing';
import { ApiService } from './api.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('ApiService', () => {
  let service = new ApiService(null);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, HttpClient, HttpHandler],
      imports: []
    });

    service = new ApiService(null);
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('httpGet function existing', () => {
    expect(service.httpGet).toBeTruthy();
  });

  it('constructURI function verification', () => {
    const testURL = service.constructURI('test');
    expect(testURL).toBe('http://ergast.com/api/f1/test.json');
  });
});
