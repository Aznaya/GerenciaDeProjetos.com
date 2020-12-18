import { Component, OnInit } from '@angular/core';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../services/projeto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem-projeto',
  templateUrl: './listagem-projeto.component.html',
  styleUrls: ['./listagem-projeto.component.css']
})
export class ListagemProjetoComponent implements OnInit {
  projeto = {} as Projeto;
  projetos: Projeto[];

  constructor(private projetoService: ProjetoService, private router: Router) { }

  ngOnInit(): void {
    console.log("Listando projetos");
    this.getProjeto();
  }

  getProjeto() {
    this.projetoService.getProjeto().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
    });
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
