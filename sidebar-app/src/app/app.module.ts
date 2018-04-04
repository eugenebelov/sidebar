import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarView } from './sidebar/sidebar.view';
import { DocumentListItem } from './sidebar/document-list/document-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarView,
    DocumentListItem
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
