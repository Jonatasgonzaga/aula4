import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DoneTodoComponent } from './components/done-todo/done-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    DoneTodoComponent,
    ListTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
