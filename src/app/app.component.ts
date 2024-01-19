import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'angulartask1';
  isMenu = false
  constructor(private route : Router){}
  ngDoCheck(): void {
    let url = this.route.url

    
  }
}
