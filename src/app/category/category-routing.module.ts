import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {ItemListComponent} from '../item/item-list/item-list.component';
import {ItemDetailComponent} from '../item/item-detail/item-detail.component';


const routes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'items/:cat', component: ItemListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
