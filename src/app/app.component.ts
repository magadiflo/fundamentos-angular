import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titleStyles!: {};
  counter: number = 0;
  
  onSayHello(sayHello: string) {
    console.log(sayHello);
    this.counter++;
    this.updateTitleStyles();
  }

  updateTitleStyles() {
    this.titleStyles = {
      'margin-top': '40px',
      'color': this.counter < 3 ? 'green' : 'goldenrod',
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
