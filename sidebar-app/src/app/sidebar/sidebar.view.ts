import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

interface Documents {
    id: number;
    type: string;
    title: string;
}

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.view.html',
  styleUrls: ['./sidebar.style.scss'],
  providers: [SidebarService]
})

export class SidebarView implements OnInit{
  constructor(private sidebarService: SidebarService) { }

  name:string = 'Documents';
  documents:Documents[];

  ngOnInit() {
    this.showData();
  }

  showData() {
    this.sidebarService.getDocumentList().subscribe((data) => {
      this.documents = data as Documents[];
    });
  }

  showChangesClick(itemId) {
    console.log("show changes", itemId);
  }
}
