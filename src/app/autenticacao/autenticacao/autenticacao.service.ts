import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient) {}

  autenticar(usuario:string , senha: string) : Observable<any>{
    return this.httpClient.get('http://localhost:8090/users/' + usuario + '/' + senha);
  }
  cadastrar(usuario:string , senha: string, email: string) : Observable<any>{
    return this.httpClient.post('http://localhost:8090/users', {usuario: usuario, senha: senha , email: email});
  }
}
