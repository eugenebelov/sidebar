import { Component } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './document-list.component.html'
})

export class DocumentListItem {
  type: string;
  title: string;
}
