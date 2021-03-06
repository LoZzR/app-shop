import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShopsListComponent } from './shops/shops-list/shops-list.component';
import { ShopComponent } from './shops/shop/shop.component';
import { HeaderComponent } from './home/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BarButtonsComponent } from './shops/shop/bar-buttons/bar-buttons.component';
import { EditShopComponent } from './shops/shop/edit-shop/edit-shop.component';
import { ErrorComponent } from './shared/error/error/error.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { AuthInterceptorService } from './auth/services/auth.interceptor.service';
import { EditFormComponent } from './shops/shop/edit-shop/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent,
    ShopComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    BarButtonsComponent,
    EditShopComponent,
    ErrorComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
