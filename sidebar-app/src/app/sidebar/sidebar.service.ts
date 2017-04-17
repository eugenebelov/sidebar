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
  };

  getDocumentChnages() {
    return [
      { docId:"1", changeId: "1", seen: false },
      { docId:"1", changeId: "2", seen: true },
      { docId:"1", changeId: "3", seen: false },
      { docId:"3", changeId: "4", seen: false },
      { docId:"3", changeId: "5", seen: true },
      { docId:"2", changeId: "6", seen: false },
      { docId:"2", changeId: "7", seen: true },
      { docId:"2", changeId: "8", seen: true },
      { docId:"2", changeId: "9", seen: false }
    ]
  }
}
