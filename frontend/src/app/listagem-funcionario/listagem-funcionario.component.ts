import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from "../services/funcionario.service";
import { Funcionario } from "../models/funcionario";

import { ProjetoService } from "../services/projeto.service";
import { Projeto } from "../models/projeto";

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

  constructor(private projetoService: ProjetoService, private funcionarioService: FuncionarioService) { }

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
    this.projetoService.getProjeto().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
    })
  }

}
