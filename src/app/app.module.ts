import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProuductComponent } from './components/add-prouduct/add-livro.component';
import { ProductsComponent } from './components/products/livro.component';
import { HttpClientModule } from '@angular/common/http';

import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { LoginUsuarioComponent } from './components/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AddProuductComponent,
    ProductsComponent,

    AddUsuarioComponent,
    LoginUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
