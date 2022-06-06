import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  nombre= '';
  password = '';
  allowNewServer = false;
  serverCreated = false;
  showSecret = false;

  constructor (){
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
  }
}
