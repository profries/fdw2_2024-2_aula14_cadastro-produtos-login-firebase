import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto: any = {nome:"", preco:0}

  constructor(private firestore: Firestore) {}

  cadastrar() {
    const produtoCollection = collection(this.firestore, 'produtos')
    addDoc(produtoCollection, this.produto)
      .then(() => {
        console.log(this.produto.nome+' cadastrado com sucesso!');
        this.produto = {nome:"", preco:0};        
      })
      .catch(err => console.log("Error: "+err));
  }
}
