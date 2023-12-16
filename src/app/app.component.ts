import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // postArray: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];

  // objArray: Array<any> = [];

  // stepForm: string = "default"

  isActive: boolean = false;

  constructor() {}

  // addNew() {
  //   this.objArray.push({ id: 6, postTitle: 'Post 6' });
  // }

  // onDelete(index: any) {
  //   this.objArray.splice(index, 1);
  // }

  // onClick(status: any) {
  //   this.stepForm = status;
  // }
}
