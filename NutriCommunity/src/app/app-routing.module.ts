import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { HomeComponent } from './home/home.component';
import { OngsComponent } from './ongs/ongs.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'ongs', component:OngsComponent},
  {path:'ongs/:id', component:ProdutosComponent},
  {path:'produto-edit/:id', component:ProdutoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
