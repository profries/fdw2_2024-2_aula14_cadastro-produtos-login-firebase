import { Component } from '@angular/core';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  //listaProdutos: any[] | undefined;
  listaProdutos$: Observable<any[]> | undefined;
  
  constructor(private firestore: Firestore){
    const produtoCollection = collection(this.firestore, 'produtos');
    /*collectionData(produtoCollection).subscribe((dataList: any[]) => {
      this.listaProdutos = dataList
    })*/
    const q = query(produtoCollection, orderBy('nome'))
    this.listaProdutos$ = collectionData(q);//produtoCollection
  }
}
