import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  name: string = '';

  constructor(
    private router: Router,
    private chatService: ChatService
  ) {
    this.name = localStorage.getItem('name') || '';
  }

  public logout() {
    localStorage.removeItem('name');
    this.chatService.logout();
    this.router.navigate(['/login']);
  }
}
