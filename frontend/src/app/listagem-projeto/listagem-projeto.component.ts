import { Component, OnInit } from '@angular/core';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../services/projeto.service';

@Component({
  selector: 'app-listagem-projeto',
  templateUrl: './listagem-projeto.component.html',
  styleUrls: ['./listagem-projeto.component.css']
})
export class ListagemProjetoComponent implements OnInit {


  projeto = {} as Projeto;
  projetos: Projeto[];

  constructor(private projetoService: ProjetoService) { }

  ngOnInit(): void {
    console.log("Listando projetos");
    this.getProjeto();
  }

  getProjeto() {
    this.projetoService.getProjeto().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
    })
  }

}
