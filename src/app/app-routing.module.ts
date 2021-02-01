import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/services/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './shared/error/error/error.component';
import { EditShopComponent } from './shops/shop/edit-shop/edit-shop.component';
import { ShopsListComponent } from './shops/shops-list/shops-list.component';

const appRoutes: Routes = [
  {
    path: 'login', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '', redirectTo: 'shops', pathMatch: 'full' 
  },
  {
    path: 'error/:errorCode',
    component: ErrorComponent
  },
  {
    path: 'shops',
    component: ShopsListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'shops/:id',
    component: EditShopComponent, canActivate: [AuthGuard]
  },
  {
    path: 'products',
    component: ShopsListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'liked-shops',
    component: ShopsListComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
