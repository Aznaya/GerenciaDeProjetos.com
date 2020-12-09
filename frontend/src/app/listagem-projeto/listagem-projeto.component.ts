import { Component, OnInit } from '@angular/core';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../services/projeto.service';

import { FuncionarioService } from "../services/funcionario.service";
import { Funcionario } from "../models/funcionario";

@Component({
  selector: 'app-listagem-projeto',
  templateUrl: './listagem-projeto.component.html',
  styleUrls: ['./listagem-projeto.component.css']
})
export class ListagemProjetoComponent implements OnInit {
  projeto = {} as Projeto;
  projetos: Projeto[];

  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];

  constructor(private projetoService: ProjetoService, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    console.log("Listando projetos");
    this.getProjeto();
    this.getFuncionario();
  }

  getProjeto() {
    this.projetoService.getProjeto().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
    });
  }

  getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }

}
