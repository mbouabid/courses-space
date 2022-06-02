import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mbousite';
  sessionIsOpened =false
  
  getLoginEvent(event){
    console.log('get event is ok')
    console.log(event)
   // this.sessionIsOpened=event
  }
}
