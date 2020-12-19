import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from "../services/funcionario.service";
import { Funcionario } from "../models/funcionario";
import { Router } from '@angular/router';
import { ProjetoService } from '../services/projeto.service';
import { Projeto } from '../models/projeto';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrls: ['./listagem-funcionario.component.css']
})
export class ListagemFuncionarioComponent implements OnInit {
  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];
  projeto = {} as Projeto;
  projetos: Projeto[];

  constructor(private funcionarioService: FuncionarioService, private projetoService: ProjetoService, private router: Router) { }

  ngOnInit(): void {
    console.log("listando funcionarios")
    this.getFuncionario();
    this.getProjeto();
  }

  getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }

  getProjeto() {
    this.projetoService.getProjeto().subscribe((projeto: Projeto[]) => {
      this.projetos = projeto;
    })
  }

  updateFuncionario(registro: Number) {
    console.log(`Editando: ${registro}`)
    // Ir para o edita-fun mandando o registro como parametro
    this.router.navigate([`/update-employee/${registro}`])
  }

  deleteFuncionario(registro: Number) {
    this.funcionarioService.deleteFuncionario(registro).subscribe();
    window.alert('Funcionario Deletado');
    location.reload(true);
  }
}
