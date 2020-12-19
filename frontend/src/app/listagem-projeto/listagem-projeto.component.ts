import { Component, OnInit } from '@angular/core';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../services/projeto.service';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { FuncionarioService } from '../services/funcionario.service';

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

  constructor(private projetoService: ProjetoService, private funcionarioService: FuncionarioService, private router: Router) { }

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
    this.funcionarioService.getFuncionario().subscribe((funcionario: Funcionario[]) => {
      this.funcionarios = funcionario;
    })
  }

  updateProjeto(codigo: Number) {
    console.log(`Editando: ${codigo}`)
    // Ir para o edita-fun mandando o registro como parametro
    this.router.navigate([`/update-project/${codigo}`])
  }

  deleteProjeto(any: Number) {
    this.projetoService.deleteProjeto(any).subscribe();
    window.alert('Projeto Deletado');
    location.reload(true);
  }
}
