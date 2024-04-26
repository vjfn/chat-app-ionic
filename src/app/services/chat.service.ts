import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { 
    this.onConnect();
  }

  public onConnect() {
    this.socket.on('connected', () => {
      console.log('connected');
      localStorage.getItem('name') ? this.login(localStorage.getItem('name') as string) : null;
    });
  }

  public logout() {
    this.socket.emit('logout');
  }

  public sendMessage(data: { message: string, to: string }) {
    this.socket.emit('message-to-user', data);
  }

  public receiveMessage() {
    return this.socket.fromEvent('message-to-user').pipe(map((data) => data));
  }

  public listMessages() {
    return this.socket.fromEvent('received').pipe(map((data) => data));

  }

  public login(name: string) {
    this.socket.emit('login', { name });
  }

  public addUser(user: string) {
    this.socket.emit('add-user', user);
  }

  public addUserListener() {
    return this.socket.fromEvent('user-added').pipe(map((data) => data));
  }
}
