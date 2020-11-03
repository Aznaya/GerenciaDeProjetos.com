import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Projeto } from "../models/projeto";

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  url = 'http://localhost:3000/projeto';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Obtem todos os Projeto
  getProjeto(): Observable<Projeto[]> {
    return this.httpClient.get<Projeto[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Obtem um Projeto por id
  getProjetoById(id: number): Observable<Projeto> {
    return this.httpClient.get<Projeto>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Adiciona um projeto
  saveProjeto(projeto: Projeto): Observable<Projeto> {
    return this.httpClient.post<Projeto>(this.url, JSON.stringify(projeto), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //Atualiza um Projeto
  updateProjeto(projeto: Projeto): Observable<Projeto> {
    return this.httpClient.put<Projeto>(this.url + '/' + projeto.codigo, JSON.stringify(projeto))
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //Deletar Projeto
  deleteProjeto(projeto: Projeto) {
    return this.httpClient.delete<Projeto>(this.url + '/' + projeto.codigo, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      //Erro ocorreu do lado do cliente
      errorMessage = error.error.message;
    } else {
      //Erro ocorreu do lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;

    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
