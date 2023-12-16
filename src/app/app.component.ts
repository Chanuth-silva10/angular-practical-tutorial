import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Usage of Uppercase pipe';
  count: number = 28464; // more readable
  dcValue: number = 3.85674; // count value

  price:number = 99.00
}