import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CadastroFuncComponent} from './cadastro-func/cadastro-func.component';
import {CadastroProComponent} from './cadastro-pro/cadastro-pro.component';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';
import { ListagemProjetoComponent } from './listagem-projeto/listagem-projeto.component';
import { EditaFuncComponent } from './edita-func/edita-func.component';
import { EditaProComponent } from './edita-pro/edita-pro.component';

const routes: Routes = [
  {
    path: '', component: ListagemProjetoComponent
  },
  {
    path: 'register-employee', component: CadastroFuncComponent
  },
  {
    path: 'register-project', component: CadastroProComponent
  },
  {
    path: 'list-employee', component: ListagemFuncionarioComponent
  },
  {
    path: 'update-employee/:id', component: EditaFuncComponent
  },
  {
    path: 'update-project/:id', component: EditaProComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
