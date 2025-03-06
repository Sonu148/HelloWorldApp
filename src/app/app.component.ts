import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorldApp';
  imgUrl = 'BL_logo.png';
  url="https://www.bridgelabz.com";

  constructor (){
    this.title="Hello  from BridgeLabz."
  }
  onClick($event:MouseEvent): void{
    console.log("Save button is clicked!", $event);
    window.open(this.url,"_blank")
  }
}
