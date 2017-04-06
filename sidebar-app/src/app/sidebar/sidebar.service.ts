import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {
  getDocumentList() {
    return [{
      id: "1",
      type: "draft",
      title: "some title 1111"
    }, {
      id: "2",
      type: "review",
      title: "some title 2222"
    }, {
      id: "3",
      type: "draft",
      title: "some title 3333"
    }]
  }
}
