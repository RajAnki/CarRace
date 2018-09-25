/**
 * @description service to do API call
 */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {

  private baseUrl = 'http://ergast.com/api/f1';

  constructor(private http: HttpClient) { }

  /**
   * @description construct the url for API with context and base url
   * @param contextUrl - context url for the API
   */
  public constructURI(contextUrl: string) {
    return this.baseUrl + '/' + contextUrl + '.json';
  }

  /**
   * @description HTTP Get request call
   * @param uriContext - url for the API
   */
  httpGet(uriContext: string) {
    return this.http.get(this.constructURI(uriContext));
  }
}
