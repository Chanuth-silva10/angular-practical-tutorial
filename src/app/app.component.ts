import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  userdetails = {
     name: "User 1",
     city: "Sri Lanka",
     countryCode: "SRL"
  }

}