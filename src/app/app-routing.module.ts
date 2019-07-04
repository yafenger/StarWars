import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./category/category.module').then((mod => mod.CategoryModule))
  }, {
    path: 'items',
    loadChildren: () => import('./item/item.module').then((mod => mod.ItemModule))
  },
  {path: '', redirectTo: '/categories', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
