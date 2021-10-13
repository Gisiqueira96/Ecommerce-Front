import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OngsComponent } from './ongs/ongs.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DuvidasFrequentesComponent } from './duvidas-frequentes/duvidas-frequentes.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'ongs', component:OngsComponent},
  {path:'ongs/:id', component:ProdutosComponent},
  {path:'produto-edit/:id', component:ProdutoEditComponent},
  {path:'produto-delete/:id', component:ProdutoDeleteComponent},
  {path:'produtos', component:ProdutosComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'login',component:LoginComponent},
  {path: 'duvidas-frequentes', component: DuvidasFrequentesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
