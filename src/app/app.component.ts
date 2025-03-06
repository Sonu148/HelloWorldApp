import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorldApp';
  imgUrl = 'BL_logo.png';

  constructor (){
    this.title="Hello  from BridgeLabz."
  }
}
