import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard, canActivate, loggedIn, redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  { path: 'tabela', component: TabelaProdutosComponent, 
    ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'cadastro', component: FormProdutosComponent, 
    ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
