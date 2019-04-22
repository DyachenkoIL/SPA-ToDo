import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit{

  private today: Date = new Date();

  ngOnInit() {
    this.today = new Date;
  }

  constructor(private router: Router) {}

  title = 'todo-app';

  onStart() {
    this.router.navigate([`/todo`]);
}
}
