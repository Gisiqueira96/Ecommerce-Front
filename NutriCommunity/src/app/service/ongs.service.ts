import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class OngsService {

  constructor(
    private http: HttpClient,
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllOngs(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://nutricommunity.herokuapp.com/categoria', this.token)
  }

  getByIdOng(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`https://nutricommunity.herokuapp.com/categoria/${id}`, this.token)

  }
  postOngs(ongs: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('https://nutricommunity.herokuapp.com/categoria', ongs, this.token)
  }

  putOng(ongs: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://nutricommunity.herokuapp.com/categoria', ongs, this.token)
  }

  deleteOng(id: number){
    return this.http.delete(`https://nutricommunity.herokuapp.com/categoria/${id}`, this.token)
  }

}
