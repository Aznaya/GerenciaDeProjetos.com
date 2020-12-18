import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Funcionario } from "../models/funcionario";
import { Projeto } from '../models/projeto';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  url = 'http://localhost:3000/funcionario';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //Obtem todos os funcionarios
  getFuncionario(): Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Obtem um funcionario por id
  getFuncionarioById(id: Number): Observable<Funcionario> {
    return this.httpClient.get<Funcionario>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //Adiciona um funcionario
  saveFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.post<Funcionario>(this.url, JSON.stringify(funcionario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  updateResponsavelProjeto(projeto: Projeto): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(this.url + '/' + projeto, JSON.stringify(projeto))
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //Atualiza um funcionario
  updateFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.httpClient.put<Funcionario>(this.url + '/' + funcionario.registro, JSON.stringify(funcionario), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  //Deletar funcionario
  deleteFuncionario(registro: Number) {
    return this.httpClient.delete<Funcionario>(this.url + '/' + registro, this.httpOptions)
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
