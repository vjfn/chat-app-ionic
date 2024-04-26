import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatBoxService {

  private observaFocusedUser = new Subject<any>();
  focusedUser$ = this.observaFocusedUser.asObservable();

  constructor() { }

  public setFocusedUser(user: any) {
    this.observaFocusedUser.next(user);
  }
 
}
