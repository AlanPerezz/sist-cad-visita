import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Mova esta linha para os imports

import { AppComponent } from './app.component';
import routes from './app.routes';
import { RegistroComponent } from './components/registro/registro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { ListagemVisitasComponent } from './components/listagem-visitas/listagem-visitas.component';
import { CadastroVisitanteComponent } from './components/cadastro-visitante/cadastro-visitante.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastroVisitasComponent } from './components/cadastro-visitas/cadastro-visitas.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


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
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe

  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
