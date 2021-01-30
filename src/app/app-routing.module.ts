import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
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
