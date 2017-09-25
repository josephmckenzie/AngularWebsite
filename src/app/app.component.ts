// This is done in Typescript angular 2 is done with it
//Everything is also done with ES6/ES7

import { Component } from '@angular/core';
//@things are decorators and are:
//an expression
//that evaluates to a function
//that takes the target, name, and property descriptor as arguments
//and optionally returns a property descriptor to install on the target object

@Component({
  selector: 'site-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sitewelcome = "Welcome to Joe's Super Awesome Angular Site.";
  mainImage = 'https://avatars1.githubusercontent.com/u/13924793?v=4&s=220';
  title = "Joe's Angular Site";
  
}
