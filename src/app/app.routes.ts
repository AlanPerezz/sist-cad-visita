import { Routes } from '@angular/router';
import { ListagemVisitasComponent } from './components/listagem-visitas/listagem-visitas.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { SucessoComponent } from './components/sucesso-link/sucesso-link.component';
import { CadastroVisitasComponent } from './components/cadastro-visitas/cadastro-visitas.component';
import { CadastroVisitanteComponent } from './components/cadastro-visitante/cadastro-visitante.component';

const routes: Routes = [
  { path: 'tela-login', component: TelaLoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'listagem', component: ListagemVisitasComponent },
  { path: 'cadastro', component: CadastroVisitasComponent },
  { path: 'sucesso' , component: SucessoComponent},
  { path: 'cadastro/:id', component: CadastroVisitasComponent },
  { path: 'cadastroVisitante', component: CadastroVisitanteComponent },
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },
  { path: '**', redirectTo: 'tela-login', pathMatch: 'full'}
];

export default routes;
