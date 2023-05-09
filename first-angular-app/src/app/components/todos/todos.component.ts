import { Component } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos:Todo[];

  constructor(){}

  ngOnInit(): void { 
    this.todos = [
      {
        content: ' First todo',
        completed: false
      },
      {
        content: ' Second todo',
        completed: true
      }
    ];
  }

  toggleDone() {

  }

}
