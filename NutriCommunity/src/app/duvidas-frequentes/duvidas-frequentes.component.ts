import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duvidas-frequentes',
  templateUrl: './duvidas-frequentes.component.html',
  styleUrls: ['./duvidas-frequentes.component.css']
})
export class DuvidasFrequentesComponent implements OnInit {
  
  //alertas do formulário
  msgNome: string
  msgEmail: string
  msgTipo: string
  alertaTextAreaImg = "hidden"
  alertaTextArea: string = "#012340"

  //validações dos inputs, text area e enviar
  nomeOk: boolean = false
  emailOk: boolean = false
  tipoOk: boolean = false
  textoOk: boolean = false
  textoLimite: string = "300 caracteres restantes"
  enviarValido: string = ".modal"

  //Por enquanto não há uma model relacionada
  //O Fale Conosco é apenas um exemplo sem consumo real
  //Variáveis para ficar no lugar da model
  email: string
  nome: string
  tipo: string
  texto: string
  
  
  constructor() { }

  ngOnInit(): void {
  }
  //limpam os inputs quando recebem o foco
  limpaErroNome() {
    this.msgNome = "hidden"
  }
  limpaErroEmail() {
    this.msgEmail = "hidden"
  }

  //atuam na validação do conteúdo inserido
  validaNome() {
    if (this.nome != undefined && this.nome.length >= 2) {
      this.nomeOk = true
      return this.msgNome = "hidden"
    }
    this.nomeOk = false
    return this.msgNome = "visible"
  }

  validaEmail() {
    if (this.email != undefined && this.email.includes("@") && this.email.includes(".")) {
      this.emailOk = true
      return this.msgEmail = "hidden"
    }
    this.emailOk = false
    return this.msgEmail = "visible"
  }
  tipoPergunta(event: any) {
    if (event.target.value != "1" && event.target.value != "2" && event.target.value != "3") {
      this.tipoOk = false
      return this.msgTipo = "visible"
    }
    this.tipoOk = true
    this.tipo = event.target.value
    return this.msgTipo = "hidden"

  }
  validaTipo(event: any) {
    if (event.target.value != "1" && event.target.value != "2" && event.target.value != "3") {
      this.tipoOk = false
      return this.msgTipo = "visible"
    }
    this.tipoOk = true
    this.tipo = event.target.value
    return this.msgTipo = "hidden"


  }
  validaTexto() {
    

    let quantCaracteres = (300 - this.texto.length)
    this.textoLimite = String(quantCaracteres) + " caracteres restantes"
    this.alertaTextArea = "#012340"
    this.alertaTextAreaImg = "hidden"
    if (quantCaracteres <= 0) {
      this.textoLimite = "Você ultrapassou o limite de caracteres!"
      this.alertaTextAreaImg = "visible"
      this.alertaTextArea = "#a61717"
    }
  }
  enviar(){
    
    if(this.nomeOk && this.tipoOk && this.emailOk){
      alert("Enviado com sucesso")
    }
    else {
      if(!this.nomeOk){
        this.msgNome = "visible"
      }
      if(!this.emailOk){
        this.msgEmail = "visible"
      }
      if(!this.tipoOk){
        this.msgTipo = "visible"
      }
      if(!this.textoOk){
        this.textoLimite = "O conteúdo digitado não é válido!"
        this.alertaTextAreaImg = "visible"
        this.alertaTextArea = "#a61717"
      }
    }
  }
}
