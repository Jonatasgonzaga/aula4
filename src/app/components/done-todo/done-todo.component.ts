import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-done-todo',
  templateUrl: './done-todo.component.html',
  styleUrls: ['./done-todo.component.scss']
})
export class DoneTodoComponent {

  constructor(private todoService: TodoService){}

}
