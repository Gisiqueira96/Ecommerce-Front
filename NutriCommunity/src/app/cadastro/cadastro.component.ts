import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  template: ` <small id="valida-nome" [style.visibility]="{{visibility}}"> <img src="../../assets/img/alertSign.svg" height="15px" class="pb-1" alt="alerta"> O nome deve conter ao menos duas letras</small>
  `
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  confirmarSenha: string
  tipoUsuario: string
  //variáveis para as mensagens de alerta nos inputs
  msgNome: string
  msgEmail: string
  msgSenha: string
  msgConfirma: string
  msgTipo: string

  //Variáveis para validar todos os dados cadastrados
  nomeOk: boolean = false
  emailOk: boolean = false
  senhaOk: boolean = false
  confirmaOk: boolean = false
  tipoOk: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit() {
    window.scroll(0, 0)
  }
  
      

  limpaErroNome(){
    this.msgNome = "hidden"
  }
  limpaErroEmail(){
    this.msgEmail = "hidden"
  }
  limpaErroSenha(){
    this.msgSenha = "hidden"
  }
  limpaErroConfirma(){
    this.msgConfirma = "hidden"
  }
  validaNome() {
    if (this.user.nome.length >= 2) {
      this.nomeOk = true
      return this.msgNome = "hidden"
    }
    this.nomeOk = false
      return this.msgNome = "visible"
  }

  validaEmail() {
    if (this.user.email.includes("@") && this.user.email.includes(".")) {
      this.emailOk = true
      return this.msgEmail = "hidden"
    }
    this.emailOk = false
    return this.msgEmail = "visible"
  }
  validaSenha() {
    if (this.user.senha.length >= 6) {
      this.senhaOk = true
      return this.msgSenha = "hidden"
    }
    this.senhaOk = false
    return this.msgSenha = "visible"

  }
  validaConfirma() {
    if (this.user.senha == this.confirmarSenha) {
      this.confirmaOk = true
      return this.msgConfirma = "hidden"
    }
    this.confirmaOk = false
    return this.msgConfirma = "visible"
  }
  
  tipoUser(event: any) {
    if(event.target.value != "adm" && event.target.value != "normal"){
      this.tipoOk = false
      return this.msgTipo = "visible"
    }
    this.tipoOk = true 
    this.tipoUsuario = event.target.value
    return this.msgTipo="hidden"  
    
  }
  validaTipo(event: any){
    if(event.target.value != "adm" && event.target.value != "normal"){
      this.tipoOk = false
      return this.msgTipo = "visible"
    }
    this.tipoOk = true 
    this.tipoUsuario = event.target.value
    return this.msgTipo="hidden"  
    
  }
  
  cadastrar() {
    this.user.tipo = this.tipoUsuario
    if (this.nomeOk && this.senhaOk && this.emailOk && this.confirmaOk && this.tipoOk) {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/home'])
        alert('Usuário cadastrado com sucesso!')
      }, erro =>{
        if(erro.status == 409){
          alert("E-mail já cadastrado!")
        }
      })
    }
     else {
      if(!this.nomeOk){
        this.msgNome = "visible"
      }
      if(!this.emailOk){
        this.msgEmail = "visible"
      }
      if(!this.senhaOk){
        this.msgSenha = "visible"
      }
      if(!this.confirmaOk){
        this.msgConfirma = "visible"
      }
      if(!this.tipoOk){
        this.msgTipo = "visible"
      }
      
  }

  }
}
