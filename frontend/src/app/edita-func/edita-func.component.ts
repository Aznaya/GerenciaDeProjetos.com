import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-edita-func',
  templateUrl: './edita-func.component.html',
  styleUrls: ['./edita-func.component.css']
})
export class EditaFuncComponent implements OnInit {
  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];
  private registro: Number;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.registro = params['id'])
   }

  ngOnInit(): void {
    this.getFuncionarioById(this.registro);
    console.log(`Dentro do Edita com o ${this.registro}`);
    console.log(this.funcionario);
  }

  getFuncionarioById(registro: Number) {
    this.funcionarioService.getFuncionarioById(registro).subscribe((funcionario: Funcionario) => {
      this.funcionario = funcionario;
    });
  }

  updateFuncionario(form: NgForm) {
    this.funcionarioService.updateFuncionario(this.funcionario).subscribe(() => {
      this.cleanForm(form);
      window.alert('Dados Atualizados');
      this.router.navigate([`/list-employee`])
    })
  }

  getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }

  cleanForm(form: NgForm) {
    this.getFuncionario();
    form.resetForm();
    this.funcionario = {} as Funcionario;
  }
}
