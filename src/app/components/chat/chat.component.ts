import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  implements OnInit {

  public message: string = '';
  public messages: any = [];

  ngOnInit(): void {
    this.listMessages();
      
  }
  constructor(private chatService: ChatService){

  }

  public sendMessage(){
    this.chatService.sendMessage(this.message);
    this.messages.push(this.message);
    this.message = '';

  }

  public listMessages() {
    this.chatService.listMessages().subscribe((data: any) => {
      console.log(data);
      this.messages.push(data.data);

    })
    
  }

}
