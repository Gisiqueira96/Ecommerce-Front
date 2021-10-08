import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { OngsService } from '../service/ongs.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  ong: Categoria = new Categoria()
  produto: Produto = new Produto()

  nome: string
  descricaoProduto: string
  imagem: string
  preco: number
  estoqueProduto: number

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private ongService: OngsService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    let id = this.route.snapshot.params['id']
    this.getOngById(id)
  }
  getOngById(id: number){
    this.ongService.getByIdOng(id).subscribe((resp: Categoria)=>{
      this.ong = resp
    })
  }
  postProduto(){
    this.produto.nomeProduto = this.nome
    this.produto.foto = this.imagem
    this.produto.descricao = this.descricaoProduto
    this.produto.estoque = this.estoqueProduto
    this.produto.valor = this.preco
    this.produto.categoria = this.ong
    this.produtosService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert ('Produto adicionado com sucesso!')
      

    })
  }
}


