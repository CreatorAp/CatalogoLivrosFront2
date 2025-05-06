import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProuductComponent } from './components/add-prouduct/add-livro.component';

import { ProductsComponent } from './components/products/livro.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { LoginUsuarioComponent } from './components/login/login.component'; 

const routes: Routes = [
  {path:'add-product',component:AddProuductComponent},
  {path:'update-product/:id',component:AddProuductComponent},
  {path:'products',component:ProductsComponent},

  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'add-usuario',component:AddUsuarioComponent},
  {path:'login',component:LoginUsuarioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
