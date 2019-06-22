import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from '../item/item-list/item-list.component';

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ItemListComponent
  ]
})
export class SharedModule { }
