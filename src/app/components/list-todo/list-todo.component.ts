import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit  {
  
  constructor(private todoService: TodoService){}
  public todos: any = [];
  
  ngOnInit(): void {
    this.todoService.todo$.subscribe((data: any[]) => this.todos = data);
  }


}
