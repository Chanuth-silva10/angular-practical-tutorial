import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  today: Date = new Date();

  postObj : object = {
    id: 1,
    postTitle: "Post 1"
  }

  postArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
  ]

}