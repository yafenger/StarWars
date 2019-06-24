import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'category', loadChildren: './category/category.module#CategoryModule'},
  {path: 'item', loadChildren: './item/item.module#ItemModule'},
  {path: '', redirectTo: '/category', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
