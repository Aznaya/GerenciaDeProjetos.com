import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from "../services/funcionario.service";
import { Funcionario } from "../models/funcionario";
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrls: ['./listagem-funcionario.component.css']
})
export class ListagemFuncionarioComponent implements OnInit {
  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    console.log("listando funcionarios")
    this.getFuncionario();
  }

  getFuncionario() {
    this.funcionarioService.getFuncionario().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
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
