import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShopsListComponent } from './shops/shops-list/shops-list.component';
import { ShopComponent } from './shops/shop/shop.component';
import { HeaderComponent } from './home/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BarButtonsComponent } from './shops/shop/bar-buttons/bar-buttons.component';
import { EditShopComponent } from './shops/shop/edit-shop/edit-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsListComponent,
    ShopComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    BarButtonsComponent,
    EditShopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
