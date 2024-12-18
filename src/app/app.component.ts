import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro-produtos-firebase';
  isAuth = false;

  constructor(private auth: Auth) {
    if(localStorage.getItem("credencial"))  
      this.isAuth = true;
  }
  atualizaLogin() {
    if(localStorage.getItem("credencial")){
      this.isAuth = true;
    }
    else {
      this.isAuth = false;
    }
  }

  realizarLogout() {
    signOut(this.auth)
      .then(() => {
        if(this.isAuth) {
          alert("Deslogado com sucesso!")
          localStorage.removeItem("credencial");
          this.isAuth = false;
        }
        else {
          alert("ERRO - não estava logado!")
        }
      })  
      .catch(err => {
        alert("ERRO - não estava logado!")
      })
  }
}
