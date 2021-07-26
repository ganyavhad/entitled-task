import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  create(data) {
    return this.httpClient.post<any>(environment.serverUrl + '/lead-collection/create', data);
  }
  search(data) {
    return this.httpClient.post<any>(environment.serverUrl + '/lead-collection/search', data);
  }
  read(id) {
    return this.httpClient.get<any>(environment.serverUrl + `/lead-collection/read/${id}`);
  }
  update(id, data) {
    return this.httpClient.put<any>(environment.serverUrl + `/lead-collection/update/${id}`, data);
  }
  delete(id) {
    return this.httpClient.delete<any>(environment.serverUrl + `/lead-collection/delete/${id}`);
  }
}
