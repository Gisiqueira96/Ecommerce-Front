import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
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
    public authService: AuthService,
    private ongsService: OngsService,
    private alertas: AlertasService
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
      this.getAllOng()
    })

  }

  putOng(){
    this.ongsService.putOng(this.ong).subscribe((resp: Categoria)=>{
      this.ong = resp
      this.alertas.showAlertSuccess('ONG atualizada com sucesso!')
      this.getAllOng()
    })
  }

  deleteOng(){
    this.ongsService.deleteOng(this.ong.id).subscribe(() => {
      this.alertas.showAlertSuccess('Produto apagado com sucesso!')
      this.getAllOng()
    })
  }

  verificaLogin(){
    if(environment.token == ''){
      this.alertas.showAlertDanger("Por favor faça login.")
    } 
  }
}
