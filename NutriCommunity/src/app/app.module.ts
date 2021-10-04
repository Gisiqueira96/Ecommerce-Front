import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    ProdutosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
