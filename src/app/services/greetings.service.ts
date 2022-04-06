import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class GreetingsService {

  counter: number = 0;

  constructor(private loggerService: LoggerService) { }

  handleGreeting(message: string) {
    this.counter++;
    this.loggerService.log(message);
  }

}
