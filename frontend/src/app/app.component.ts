import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './services/funcionario.service';
import { Funcionario } from './models/funcionario';
import { ProjetoService } from './services/projeto.service';
import { Projeto } from './models/projeto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  funcionario = {} as Funcionario;
  projeto = {} as Projeto;
  funcionarios: Funcionario[];
  projetos: Projeto[];

  constructor(private funcionarioService: FuncionarioService, private projetoService: ProjetoService) {}
  
  ngOnInit() {
    this.getFuncionario();
    this.getProjeto();
  }

  // defini se um funcionario será criado ou atualizado
  saveFuncionario(form: NgForm) {
    if (this.funcionario.registro !== undefined) {
      this.funcionarioService.updateFuncionario(this.funcionario).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.funcionarioService.saveFuncionario(this.funcionario).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }
  // defini se um projeto será criado ou atualizado
  saveProjeto(form: NgForm) {
    if (this.projeto.codigo !== undefined) {
      this.projetoService.updateProjeto(this.projeto).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.projetoService.saveProjeto(this.projeto).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os funcionarios
  getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }
  // Chama o serviço para obtém todos os projetos
  getProjeto() {
    this.projetoService.getProjeto().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
    });
  }

  // deleta um funcionario
  deleteFuncionario(funcionario: Funcionario) {
    this.funcionarioService.deleteFuncionario(funcionario.registro).subscribe(() => {
      this.getFuncionario();
    });
  }

  // deleta um projeto
  deleteProjeto(projeto: Projeto) {
    this.projetoService.deleteProjeto(projeto.codigo).subscribe(() => {
      this.getProjeto();
    });
  }

  // copia o funcionario para ser editado.
  editFuncionario(funcionario: Funcionario) {
    this.funcionario = { ...funcionario };
  }

  // copia o projeto para ser editado.
  editProjeto(projeto: Projeto) {
    this.projeto = { ...projeto };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getFuncionario();
    this.getProjeto
    form.resetForm();
    this.funcionario = {} as Funcionario;
    this.projeto = {} as Projeto;
  }

}