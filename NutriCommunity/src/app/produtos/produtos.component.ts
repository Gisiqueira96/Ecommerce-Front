import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
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
  estoqueOk = false
  produtoTotalCarrinho = "+"

  listaProduto: Produto[]

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private ongService: OngsService,
    public authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.idOng = this.route.snapshot.params['id']
    this.getOngById(this.idOng)

  }
  getOngById(id: number) {
    this.ongService.getByIdOng(id).subscribe((resp: Categoria) => {
      this.ong = resp
    })
  }

  postProduto() {
    this.produto.nomeProduto = this.nome
    this.produto.foto = this.imagem
    this.produto.descricao = this.descricaoProduto
    this.produto.estoque = this.estoqueProduto
    this.produto.valor = this.preco
    this.produto.categoria = this.ong
    this.produtosService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.alerta.showAlertSuccess('Produto adicionado com sucesso!')
      this.getOngById(this.idOng)

    })
  }

  findByIdProduto(id: number) {
    if(environment.token == ''){
      this.alerta.showAlertDanger("Por favor faça login.")
      this.router.navigate(["/login"])
    }else{
      //Sempre que o usuário clicar no botão, o valor de data-dismiss será resetado
    const botaoAdicionarCarrinho = document.getElementById("adicionaCarrinhoBotao")
    botaoAdicionarCarrinho?.removeAttribute("data-dismiss")

     this.produtosService.getByIdProduto(id).subscribe((resp) => {
      this.produto = resp
    })
    }
  }

  limpaErroEstoque() {
    this.msgEstoque = "hidden"
  }
  leQuantidade(event: any) {
    const botaoAdicionarCarrinho = document.getElementById("adicionaCarrinhoBotao")
    botaoAdicionarCarrinho?.removeAttribute("data-dismiss")
    if (event.target.value > this.produto.estoque || event.target.value <= 0) {
      this.estoqueOk = false
      return this.msgEstoque = "visible"
    } else {
      this.msgEstoque = "hidden"
      this.estoqueOk = true
      return this.quantidadeProduto = event.target.value
    }
  }
  
  alterarEstoque() {
    let somaCarrinho = 0
    somaCarrinho += this.quantidadeProduto
    if (somaCarrinho != 0) {
      this.produtoTotalCarrinho = somaCarrinho.toString()
     
    }
    if (this.estoqueOk && this.produto.estoque - this.quantidadeProduto >= 0) {

      this.produto.estoque -= this.quantidadeProduto
      this.produtosService.putProduto(this.produto).subscribe((resp: Produto) => {
        this.getOngById(this.idOng)
        return this.produto = resp
      })
      
      const botaoAdicionarCarrinho = document.getElementById("adicionaCarrinhoBotao")
      botaoAdicionarCarrinho?.setAttribute("data-dismiss", "modal")
      this.alerta.showAlertSuccess('Adicionado ao carrinho com sucesso')
      
    } else {
      this.msgEstoque = "visible"
    }
  }
}


