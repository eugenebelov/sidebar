import { Component, Input } from '@angular/core';

 @Component({
   selector: 'list-item',
   templateUrl: './list.component.html'
 })

 export class DocumentListItem {
   @Input() type:String;
   @Input() title:String;
 }
