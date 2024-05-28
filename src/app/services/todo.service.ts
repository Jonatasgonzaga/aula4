import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private _todo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public todo$ = this._todo.asObservable();

  addTodo(task:any){
    let data = this.getData();
    if(data){
      data.push(task);
    }else{
      data = [task];  
    }
    this.setData(data);
  }

  getData(){
    let data: any = localStorage.getItem('data');
    data = JSON.parse(data);
    return data;
  }

  setData(data: any[]){
    localStorage.setItem('data',JSON.stringify(data));
    this._todo.next(data);
  }

  removeTodo(index:number){

  }

  markAsDone(index:number){

  }

  markAsPending(index:number){

  }
}
