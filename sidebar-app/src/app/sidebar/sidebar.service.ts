import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SidebarService {

  constructor(private http: HttpClient) { }

  getDocumentList() {
    return this.http.get('http://localhost:3000/documents');
  }
}
