import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../services/projeto.service';

@Component({
  selector: 'app-cadastro-pro',
  templateUrl: './cadastro-pro.component.html',
  styleUrls: ['./cadastro-pro.component.css']
})
export class CadastroProComponent implements OnInit {

  projeto = {} as Projeto;
  projetos: Projeto[];

  constructor(private funcionarioService: ProjetoService) { }

  ngOnInit(): void {  }

  saveProjeto(form: NgForm) {
    this.funcionarioService.saveProjeto(this.projeto).subscribe(() => {
      this.cleanForm(form);
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    form.resetForm();
    this.projeto = {} as Projeto;
  }
}
