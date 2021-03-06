import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private http: HttpClient
  ) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  postProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>('https://nutricommunity.herokuapp.com/produto', produto, this.token)
  }

  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://nutricommunity.herokuapp.com/produto/${id}`, this.token)
  }

  putProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>('https://nutricommunity.herokuapp.com/produto', produto, this.token)
  }

  deleteProduto(id: number){
    return this.http.delete(`https://nutricommunity.herokuapp.com/produto/${id}`, this.token)
  }
}