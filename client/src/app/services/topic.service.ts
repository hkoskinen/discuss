import { Injectable } from '@angular/core';
import { Topic } from '../topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor() { }

  getTopics(): Topic[] {
    return [
      {
        title: 'Meaning of Life',
        body: 'Like the title asks...What do you think is the meaning of life?'
      },
      {
        title: 'Should I invest in Crypto',
        body: 'I\'ve been wondering that should I invest in cryptocurrencies or not, and ' +
         'what currency I should invest in?'
      }
    ];
  }
}
