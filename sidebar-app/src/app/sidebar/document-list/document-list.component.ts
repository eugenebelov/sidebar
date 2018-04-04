import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './document-list.component.html'
})

export class DocumentListItem {
  @Input() type: string;
  @Input() title: string;
}
