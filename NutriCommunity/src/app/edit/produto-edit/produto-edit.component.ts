import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutosService } from 'src/app/service/produtos.service';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  produto: Produto = new Produto
  idProduto: number

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    window.scroll(0,0)

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(id: number){
    return this.produtoService.getByIdProduto(id).subscribe((resp)=>{
      this.produto = resp
    })
  }

  putProduto(){
    return this.produtoService.putProduto(this.produto).subscribe((resp)=>{
      this.produto = resp
      alert("Produto atualizado")
      this.router.navigate([`/ongs/${this.produto.categoria.id}`])
    })
  }
}
