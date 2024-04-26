import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatComponent } from './components/chat/chat.component';
//Importamos SocketIoModule para tenerlo disponible en toda la app
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatUserListComponent } from './components/chat-user-list/chat-user-list.component';

//Configuracion de SocketIo, cambiar el puerto segun necesidad.
const config: SocketIoConfig = {url: 'http://localhost:4000', options:{}};

//Importamos el forms module

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    NavbarComponent,
    ChatBoxComponent,
    ChatUserListComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy
   }],
  bootstrap: [AppComponent],
})
export class AppModule {}
