import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NutriCommunity';
constructor(
  private router: Router
){}
  geral(){
    if(this.router.url == "/cadastro" || this.router.url == "/login"){
      return false
    }
    else{
      return true
    }
    
  }
}

