import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.view.html'
})
export class SidebarView {
  name = 'OMG';
  documents = [{
    type: "draft",
    title: "some title 1"
  }, {
    type: "review",
    title: "some title 2"
  }, {
    type: "draft",
    title: "some title 3"
  }]
}
