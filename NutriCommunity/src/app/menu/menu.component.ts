import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  nome = (environment.nome.toUpperCase().split(' ').slice(0, 1))
  homepage: boolean
  addCarrinho = "+"

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(

  ) {
  }
  sair() {
    this.router.navigate(['/login'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
  }
  inicial() {

    if (this.router.url == "/home") {
      return this.homepage = true;
    }
    else {
      return this.homepage = false;
    }
  }

  adicionaCarrinho(produtoTotalCarrinho: string){
  this.addCarrinho = produtoTotalCarrinho
  }
  
  darkMode() {
    const mode = document.querySelector('html')
    if (mode?.classList.value == 'dark-mode') {
      return true
    }
      return false    
  }
  changeMode() {
    const mode = document.querySelector('html')
    mode?.classList.toggle('dark-mode')
  }
}
