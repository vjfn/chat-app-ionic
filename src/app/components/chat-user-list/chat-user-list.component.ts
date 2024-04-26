import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatBoxService } from '../../services/chat-box.service';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrl: './chat-user-list.component.scss'
})
export class ChatUserListComponent {

  public users: any = [];

  public userToAdd: string = '';
  public userSended: boolean = false;

  constructor(
    private chatService: ChatService,
    private chatBoxService: ChatBoxService
  ) {
    this.addUserListener();
    localStorage.getItem('users') && (this.users = JSON.parse(localStorage.getItem('users') as string));
  }

  public addUser() {
    this.chatService.addUser(this.userToAdd);
    this.userSended = true;
  }

  public addUserListener() {
    this.chatService.addUserListener().subscribe((data: any) => {
      this.userSended = false;
      if (data.error) return alert(data.error);
      this.users.push(data);
      localStorage.setItem('users', JSON.stringify(this.users));
    });
  }

  public selectUser(user: any) {
    this.chatBoxService.setFocusedUser(user);
  }
}
