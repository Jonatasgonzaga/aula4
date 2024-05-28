import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {

  constructor(private todoService: TodoService){}
  
  public taskValue: string = 'Comprar ração do gato';

  addTask(){
    if(!this.taskValue) return false;
    const task: any = {
      description: this.taskValue,
      isDone: false //objeto literal
    };
    this.todoService.addTodo(task)
    this.taskValue = '';
    return;
  }
}
