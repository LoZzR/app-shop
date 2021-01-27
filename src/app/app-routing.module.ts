import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { BoardAdminComponent } from './home/board-admin/board-admin.component';
import { BoardUserComponent } from './home/board-user/board-user.component';
import { HomeComponent } from './home/home/home.component';
import { ErrorComponent } from './shared/error/error/error.component';
import { EditShopComponent } from './shops/shop/edit-shop/edit-shop.component';
import { ShopsListComponent } from './shops/shops-list/shops-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
