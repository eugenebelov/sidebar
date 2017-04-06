import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.view.html',
  providers: [SidebarService]
})

export class SidebarView {
  constructor(private sidebarService: SidebarService) { }

  name = 'OMG';
  documents = this.sidebarService.getDocumentList();

  showChangesClick(itemId) {
    console.log("show changes", itemId);
  }
}
