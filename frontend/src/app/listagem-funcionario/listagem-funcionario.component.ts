import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from "../services/funcionario.service";
import { Funcionario } from "../models/funcionario";

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrls: ['./listagem-funcionario.component.css']
})
export class ListagemFuncionarioComponent implements OnInit {

  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    console.log("listando funcionarios")
    this.getFuncionario();
  }

  getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }

}
