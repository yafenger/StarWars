import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemDetailComponent} from './item-detail/item-detail.component';

const routes: Routes = [
  {path: ':cat/:itemid', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule {
}
