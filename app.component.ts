import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messagefromchild: string | any
  
  sendmessagetochild() {
    this.messagefromchild = "Hello from Parent";
  }
  recivemessagefromchild(massage:string) {
    console.log(massage);
    
   }
}
