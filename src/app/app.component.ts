import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  bool: boolean = false;

  // Template Variable

  onKeyup(username:any) {
    // console.log($event.key);
    console.log(username);

  }

  // event filtering

  // onKeyup($event: any) {
  //   console.log($event.key);
  //   console.log('kkkkkkkkkkkk')

  // }
}
