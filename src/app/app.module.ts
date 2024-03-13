import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import routes from './app.routes';
import { RegistroComponent } from './components/registro/registro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
