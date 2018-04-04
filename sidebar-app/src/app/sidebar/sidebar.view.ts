import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.view.html',
  styleUrls: ['sidebar.style.css'],
  providers: [SidebarService]
})

export class SidebarView implements OnInit{
  constructor(private sidebarService: SidebarService) { }

  name:string = 'OMG';
  documents:any;

  ngOnInit() {
    this.showData();
  }

  showData() {
    this.sidebarService.getDocumentList().subscribe((data) => {
      this.documents = data;
    });
  }

  showChangesClick(itemId) {
    console.log("show changes", itemId);
  }
}
