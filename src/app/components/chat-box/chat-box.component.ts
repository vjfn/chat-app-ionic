import { Component, computed, effect } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatBoxService } from '../../services/chat-box.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css'
})
export class ChatBoxComponent {
  public message: string = '';
  public messages: any = {};

  focusedUser: string = '';

  constructor(
    private chatService: ChatService,
    private chatBoxService: ChatBoxService
  ) {
  }

  ngOnInit(): void {
    this.receiveMessage();
    this.chatBoxService.focusedUser$.subscribe((user: any) => {
      if (user.name === this.focusedUser) return 
      this.focusedUser = user;

      if (!this.messages[user]) this.messages[user] = [];
      
      console.log(this.focusedUser);
    });
  }

  public sendMessage() {
    this.chatService.sendMessage({ message: this.message, to: this.focusedUser });
    this.messages[this.focusedUser].push({ message: this.message, user: 'me' });
    this.message = '';
  }

  public receiveMessage() {
    this.chatService.receiveMessage().subscribe((data: any) => {
      console.log(data);
      if (!this.messages[data.from]) this.messages[data.from] = [];
      this.messages[data.from].push({ message: data.message, user: data.from });
    });
  }
}

