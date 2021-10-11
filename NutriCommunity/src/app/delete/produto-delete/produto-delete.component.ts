import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { ProdutosService } from 'src/app/service/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produto: Produto = new Produto()
  idProduto: number

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  if(environment.token == ''){
    this.router.navigate(['/logar'])
  }
    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
  }

  findByIdProduto(id: number){
    return this.produtoService.getByIdProduto(id).subscribe((resp)=>{
      this.produto = resp
    })
  }

  apagar(){
    this.produtoService.deleteProduto(this.idProduto).subscribe(() => {
      alert('Produto apagado com sucesso!')
      this.router.navigate(['/home'])
    })
  }

}
