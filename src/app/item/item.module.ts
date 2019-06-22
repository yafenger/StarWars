import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { SharedModule } from '../shared/shared.module';
// import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    ItemDetailComponent, 
    // ItemListComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule
  ]
})
export class ItemModule { }
