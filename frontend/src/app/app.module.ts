import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroFuncComponent } from './cadastro-func/cadastro-func.component';
import {RouterModule, Routes} from '@angular/router';
import { CadastroProComponent } from './cadastro-pro/cadastro-pro.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';
import { ListagemProjetoComponent } from './listagem-projeto/listagem-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncComponent,
    CadastroProComponent,
    HomeComponent,
    ListagemFuncionarioComponent,
    ListagemProjetoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
