import { Injectable } from '@angular/core';
import { Topic } from '../topic';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private topicsUrl = 'api/topics';

  constructor(private http: HttpClient) { }

  // mock data from memory
  getTopics(): Observable<Topic[]> {
    return of( [
      {
        title: 'Meaning of Life',
        body: 'Like the title asks...What do you think is the meaning of life?'
      },
      {
        title: 'Should I invest in Crypto',
        body: 'I\'ve been wondering that should I invest in cryptocurrencies or not, and ' +
         'what currency I should invest in?'
      },
      {
        title: 'Test',
        body: 'Testing testing 1..2..3..'
      }
    ]);
  }

  // remote data from back-end
  getTopicsHttp(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.topicsUrl);
  }

  getTopicById(id: number): Observable<Topic> {
    const url = `${this.topicsUrl}/${id}`;
    return this.http.get<Topic>(url).pipe(

    );
  }

  // POST: add new topic to server
  postTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(this.topicsUrl, topic, httpOptions).pipe(

    );
  }
}
