import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.view.html'
})
export class SidebarView {
  name = 'OMG';
  documents = [{
    id: "1",
    type: "draft",
    title: "some title 1"
  }, {
    id: "2",
    type: "review",
    title: "some title 2"
  }, {
    id: "3",
    type: "draft",
    title: "some title 3"
  }];

  showChanges(itemId) {
    console.log("show changes", itemId);
  }
}
