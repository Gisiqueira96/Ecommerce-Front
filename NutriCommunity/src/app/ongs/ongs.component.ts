import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { OngsService } from '../service/ongs.service';

@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})
export class OngsComponent implements OnInit {

  listaOngs: Categoria[]
  ong: Categoria = new Categoria()

  local: string
  tipoOng: string
  nome: string
  imagem: string

  listaProduto: Produto[]

  constructor(
    private ongsService: OngsService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.getAllOng()
  }

  getAllOng(){
    this.ongsService.getAllOngs().subscribe((resp: Categoria[])=>{
      this.listaOngs = resp
    })
  }

  findByIdOng(id: number){
    return this.ongsService.getByIdOng(id).subscribe((resp)=>{
      this.ong = resp
    })
  }

  postOng(){
    this.ong.nomeOng = this.nome
    this.ong.localAtuacao = this.local
    this.ong.tipo = this.tipoOng
    this.ong.foto = this.imagem

    this.ongsService.postOngs(this.ong).subscribe((resp: Categoria)=>{
      this.ong = resp

      alert ('ONG Adicionada com sucesso!')
    })

  }

  putOng(){
    this.ongsService.putOng(this.ong).subscribe((resp: Categoria)=>{
      this.ong = resp
      alert ('ONG atualizada com sucesso!')
    })
  }
}
