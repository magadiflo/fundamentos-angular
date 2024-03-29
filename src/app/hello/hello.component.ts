import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input() name!: string;
  @Output() sayHello: EventEmitter<string> = new EventEmitter();

  namesList: string[] = [];
  inputName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onNameClick(): void {
    this.sayHello.emit('Hola desde el componente hijo hello!!');
  }

  addName(): void {
    this.namesList.push(this.inputName);
    this.inputName = '';
    console.log(this.namesList);  
  }

}
