import { Component, EventEmitter, Output } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: any = { email:"", senha:""};
  @Output() onLoginEvent = new EventEmitter();
  constructor(private auth: Auth) {}

  realizarLogin() {    
    signInWithEmailAndPassword(this.auth, this.usuario.email, this.usuario.senha)
      .then(userCredential => {
        localStorage.setItem("credencial", JSON.stringify(userCredential));
        this.onLoginEvent.emit();
        alert("Login com sucesso")
      })
      .catch(err => {
        alert("Usuario ou senha invalidos")
      }) 

  }
}
