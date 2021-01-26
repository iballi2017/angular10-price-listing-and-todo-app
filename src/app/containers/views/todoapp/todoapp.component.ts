import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from 'src/app/shared/model/todo';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.scss']
})
export class TodoappComponent implements OnInit {
  todoList: any;
  @ViewChild('todo') todo:ElementRef;
  @ViewChild('date') date:ElementRef;
  @ViewChild('time') time:ElementRef;
  constructor(private _todoSvc: TodoService) { }

  ngOnInit(): void {
    this._todoSvc.getTodoList();
    this.todoList = this._todoSvc.getTodoList();
  }

  handleAddToList(){
    const todo = this.todo.nativeElement.value
    const date = this.date.nativeElement.value
    const time = this.time.nativeElement.value
    let obj:Todo = {
      id: new Date().getTime().toString(),
      todo: todo,
      date: date,
      time: time,
      isDone: false
    }   
    if(obj.todo != "" && obj.date != "" && obj.time != ""){
      this._todoSvc.addTodo(obj);
    } 
    this.todo.nativeElement.value =""
    this.date.nativeElement.value =""
    this.time.nativeElement.value =""
  } 
  handleRemove(id){      
      this.todoList = this._todoSvc.removeTodo(id);
  }

  handleIsDone(id){
    this.todoList = this._todoSvc.doneTodo(id);
  }

  handleClearAll(){
    this.todoList = this._todoSvc.removeAllItems();
  }
}
