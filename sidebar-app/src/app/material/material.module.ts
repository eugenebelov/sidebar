import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';

import { MatListModule } from '@angular/material/list'
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule, MatSelectModule],
})

export class SidebarMaterialModule { }
