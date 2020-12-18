import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { Funcionario } from '../models/funcionario';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-func',
  templateUrl: './cadastro-func.component.html',
  styleUrls: ['./cadastro-func.component.css']
})
export class CadastroFuncComponent implements OnInit {

  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.getFuncionario();
  }

  saveFuncionario(form: NgForm) {
    if(this.funcionario.codigo_projeto == null) {
      this.funcionario.codigo_projeto = 0;
    };
    this.funcionarioService.saveFuncionario(this.funcionario).subscribe(() => {
      this.cleanForm(form);
      window.alert('Cadastro Realizado');
    });
  }

  getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getFuncionario();
    form.resetForm();
    this.funcionario = {} as Funcionario;
  }

}
