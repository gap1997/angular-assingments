import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Length: number = 0;
inputTextbox: any;

  oninput(value: string) {
    this.Length=value.length
  }
  

}


