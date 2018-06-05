import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics(): void {
    this.topics = this.topicService.getTopics();
  }
}
