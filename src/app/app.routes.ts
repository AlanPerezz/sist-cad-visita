import { Routes } from '@angular/router';
import { ListagemVisitasComponent } from './components/listagem-visitas/listagem-visitas.component';
import { CadastroVisitasComponent } from './components/cadastro-visitas/CadastroVisitasComponent';
import { RegistroComponent } from './components/registro/registro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { SucessoComponent } from './components/sucesso-link/sucesso-link.component';

const routes: Routes = [
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroVisitasComponent },
  { path: 'listagem', component: ListagemVisitasComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'tela-login', component: TelaLoginComponent },
  { path: 'sucesso' , component: SucessoComponent},
  { path: '**', redirectTo: '/cadastro', pathMatch: 'full'}
];

export default routes;
