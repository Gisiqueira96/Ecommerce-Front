import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variável para auxiliar o consumo
  userLogin: UserLogin = new UserLogin()


  //variáveis para as mensagens de alerta nos inputs
  msgEmail: string
  msgSenha: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  //Funções de limpar mensagens de alerta ao clicar no input
  limpaErroEmail() {
    this.msgEmail = "hidden"
  }
  limpaErroSenha() {
    this.msgSenha = "hidden"
  }

  //Funções para validar os dados inseridos pelo usuário
  validaEmail() {
    if (this.userLogin.email != undefined && this.userLogin.email.includes("@") && this.userLogin.email.includes(".")) {
      return this.msgEmail = "hidden"
    }
    return this.msgEmail = "visible"
  }

  validaSenha() {
    if (this.userLogin.senha != undefined && this.userLogin.senha.length >= 6) {
      return this.msgSenha = "hidden"
    }
    return this.msgSenha = "visible"
  }

 //Função de logar
  logar() {
    this.authService.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
      environment.tipo = this.userLogin.tipo
      this.router.navigate(['/home'])
    }, erro => {
      //Quando os dados inseridos não condizem com o que está cadastrado no banco de dados
      if (erro.status == 500) {
        alert('Email ou senha estão incorretos!')
      }
    })
  }
}
