import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  getDocumentList() {
    return [{
      id: "1",
      bookmark: false,
      type: "draft",
      title: "Document 1"
    }, {
      id: "2",
      bookmark: true,
      type: "review",
      title: "Document 2"
    }, {
      id: "3",
      bookmark: true,
      type: "draft",
      title: "Document 3"
    }]
  }
}
