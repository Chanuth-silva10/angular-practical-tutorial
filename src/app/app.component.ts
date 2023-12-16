import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  bool: boolean = false;
  userName!: string;

  // Two way data binding 

  onKeyup() {
    console.log(this.userName);
  }

}
