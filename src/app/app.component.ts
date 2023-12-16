import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  
  postArray: Array<string> = ['post 1', 'post 2', 'post 3', 'post 4', 'post 5'];

  objArray: Array<any> = [
    {id: 1, postTitle: 'Post 1'},
    {id: 2, postTitle: 'Post 2'},
    {id: 3, postTitle: 'Post 3'},
    {id: 4, postTitle: 'Post 4'},
  ]; 

  constructor(){

  }

  addNew() {
    this.objArray.push({id: 6,postTitle: 'Post 6' })
  }

  // onDelete(post: any) {
  //   let index = this.objArray.indexOf(post);
  //   console.log(index)
  //   this.objArray.splice(index, 1);
  // }

  onDelete(index: any) {
    this.objArray.splice(index, 1);
  }
  
}
