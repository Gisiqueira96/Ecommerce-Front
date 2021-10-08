import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { EquipeComponent } from './equipe/equipe.component';

import { FacaParteComponent } from './faca-parte/faca-parte.component';
import { OdsComponent } from './ods/ods.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { HomeComponent } from './home/home.component';
import { OngsComponent } from './ongs/ongs.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    MenuComponent,
    RodapeComponent,

    EquipeComponent,

    FacaParteComponent,
    OdsComponent,
    ComoFuncionaComponent,
    HomeComponent,
    OngsComponent,
    ProdutosComponent,
    ProdutoEditComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
