import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroFuncComponent } from './cadastro-func/cadastro-func.component';
import { CadastroProComponent } from './cadastro-pro/cadastro-pro.component';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';
import { ListagemProjetoComponent } from './listagem-projeto/listagem-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroFuncComponent,
    CadastroProComponent,
    ListagemFuncionarioComponent,
    ListagemProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
