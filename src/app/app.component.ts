import { Component } from '@angular/core';

import { GreetingsService } from './services/greetings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleStyles!: {};

  constructor(private greetingService: GreetingsService){}
  
  onSayHello(sayHello: string) {
    this.greetingService.handleGreeting(sayHello);
    this.updateTitleStyles();
  }

  updateTitleStyles() {
    this.titleStyles = {
      'margin-top': '40px',
      'color': this.greetingService.counter < 3 ? 'green' : 'goldenrod',
    }
  }

  updateNameClasses(name: string) {
    return {
      'error': name.length <= 3,
      'warning': name.length > 3 && name.length <= 6,
      'success': name.length > 6,
      'bold': name.length > 8,
    };
  }

}
