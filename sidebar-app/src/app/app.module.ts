import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarView } from './sidebar/sidebar.view';
import { DocumentListItem } from './sidebar/document-list/list.component';
import { DocumentChanges } from './sidebar/document-detailed/document-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarView,
    DocumentListItem,
    DocumentChanges
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
