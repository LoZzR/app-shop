import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './shared/error/error/error.component';
import { EditShopComponent } from './shops/shop/edit-shop/edit-shop.component';
import { ShopsListComponent } from './shops/shops-list/shops-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/shops', pathMatch: 'full' },
  {
    path: 'error/:errorCode',
    component: ErrorComponent
  },
  {
    path: 'shops',
    component: ShopsListComponent,
  },
  {
    path: 'shops/:id',
    component: EditShopComponent
  },
  {
    path: 'products',
    component: ShopsListComponent
  },
  {
    path: 'liked-shops',
    component: ShopsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
