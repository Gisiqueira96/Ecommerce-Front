import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
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
  quantidadeProduto: number
  idOng: number
  msgEstoque: string
  estoqueOk= false


  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private ongService: OngsService,
    public authService: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    this.idOng = this.route.snapshot.params['id']
    this.getOngById(this.idOng)
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

  findByIdProduto(id: number){
    return this.produtosService.getByIdProduto(id).subscribe((resp)=>{
      this.produto = resp
    })
  }

  leQuantidade(event: any){
    if(event.target.value > this.produto.estoque || event.target.value <= 0){
      this.estoqueOk = false
      return this.msgEstoque = "visible"
    }else{
      this.msgEstoque = "hidden"
      this.estoqueOk = true
      return this.quantidadeProduto = event.target.value
    }
  }

  alterarEstoque(){
    if(this.estoqueOk){
      this.produto.estoque -= this.quantidadeProduto
      this.produtosService.putProduto(this.produto).subscribe((resp: Produto) => {
        return this.produto = resp
      })
      this.getOngById(this.idOng)
    } else{
      this.msgEstoque = "visible"
    }
  }
}


