import { Injectable, InjectionToken } from '@angular/core';
// Dependency InjectionToken
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  create(userBody) {
    return this._http.post('/users/new', userBody);
  }
  getAll() {
    return this._http.get('/users');
  }
  // retrieveById(id) {
  //   return this._http.get('/product/edit/' + id);
  // }
  // delete(id) {
  //   return this._http.delete('/product/delete/' + id);
  // }
  // update(id, editBody) {
  //   return this._http.put('/product/update/' + id, editBody);
  // }
}
