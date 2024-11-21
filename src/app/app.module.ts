import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(
      {
        "projectId":"cadastro-produtos-2024-2-6afc2",
        "appId":"1:320522040082:web:de333feaa4bab5da2f79cb",
        "storageBucket":"cadastro-produtos-2024-2-6afc2.firebasestorage.app",
        "apiKey":"AIzaSyCl-CfW9JIX_Nqr-aLePqOPLhfUI2ckjME",
        "authDomain":"cadastro-produtos-2024-2-6afc2.firebaseapp.com",
        "messagingSenderId":"320522040082"
      })),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
