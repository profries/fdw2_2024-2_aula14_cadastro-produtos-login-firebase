import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard, canActivate, loggedIn, redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);


const routes: Routes = [
  { path: 'tabela', component: TabelaProdutosComponent, 
    ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'cadastro', component: FormProdutosComponent, 
    ...canActivate(redirectUnauthorizedToLogin) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
