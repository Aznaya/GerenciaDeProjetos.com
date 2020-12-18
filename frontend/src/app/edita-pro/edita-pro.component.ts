import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../services/projeto.service';

@Component({
  selector: 'app-edita-pro',
  templateUrl: './edita-pro.component.html',
  styleUrls: ['./edita-pro.component.css']
})
export class EditaProComponent implements OnInit {
  projeto = {} as Projeto;
  projetos: Projeto[];
  private codigo: Number;

  constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.codigo = params['id'])
   }

  ngOnInit(): void {
    this.getProjetoById(this.codigo);
  }

  getProjetoById(codigo: Number) {
    this.projetoService.getProjetoById(codigo).subscribe((projeto: Projeto) => {
      this.projeto = projeto;
    });
  }

  updateProjeto(form: NgForm) {
    this.projetoService.updateProjeto(this.projeto).subscribe(() => {
      this.cleanForm(form);
      window.alert('Dados Atualizados');
      this.router.navigate([``])
    })
  }

  getProjeto() {
    this.projetoService.getProjeto().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
    })
  }

  cleanForm(form: NgForm) {
    this.getProjeto();
    form.resetForm();
    this.projeto = {} as Projeto;
  }

}
