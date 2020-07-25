import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsListComponent } from './shops/shops-list/shops-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/shops', pathMatch: 'full' },
  {
    path: 'shops',
    component: ShopsListComponent,
  },
  {
    path: 'products',
    component: ShopsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
