import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name: string = '';
  error: string = '';

  constructor(
    private router: Router,
    private chatService: ChatService
  ) {}

  public login(){
    if (this.name === '') {
      this.error = 'Please enter a name';
      return;
    }

    if (this.name.length < 3) {
      this.error = 'Name must be at least 3 characters';
      return;
    }

    this.chatService.login(this.name);

    localStorage.setItem('name', this.name);
    this.router.navigate(['/chat']);
  }
}
