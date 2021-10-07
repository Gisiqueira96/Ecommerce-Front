import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { OngsService } from '../service/ongs.service';

@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})
export class OngsComponent implements OnInit {
  router: any;

  listaOngs: Categoria[]
  ong: Categoria = new Categoria

  local: string
  tipoOng: string
  nome: string
  imagem: string
  id:number

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
  encaminharProduto(){
    alert (this.id)
    this.ongsService.getByIdOng(this.id).subscribe((resp: Categoria)=>{
      this.ong = resp

      
    })
  

  }
}
