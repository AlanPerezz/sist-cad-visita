import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import routes from './app.routes';
import { RegistroComponent } from './components/registro/registro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { CadastroVisitasComponent } from './components/cadastro-visitas/cadastro-visitas.component';
import { ListagemVisitasComponent } from './components/listagem-visitas/listagem-visitas.component';
import { CadastroVisitanteComponent } from './components/cadastro-visitante/cadastro-visitante.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    TelaLoginComponent,
    CadastroVisitasComponent,
    ListagemVisitasComponent,
    CadastroVisitanteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
