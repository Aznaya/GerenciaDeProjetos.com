import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CadastroFuncComponent} from './cadastro-func/cadastro-func.component';
import {CadastroProComponent} from './cadastro-pro/cadastro-pro.component';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';
import { ListagemProjetoComponent } from './listagem-projeto/listagem-projeto.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cadastrofunc', component: CadastroFuncComponent
  },
  {
    path: 'cadastropro', component: CadastroProComponent
  },
  {
    path: 'listp', component: ListagemProjetoComponent
  },
  {
    path: 'listf', component: ListagemFuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
