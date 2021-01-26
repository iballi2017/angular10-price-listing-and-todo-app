import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList:Todo[]=[]
  constructor() { }

  getTodoList(){
    if(localStorage.getItem("myTodoList")){
      this.todoList = JSON.parse(localStorage.getItem("myTodoList"));
      return this.todoList;
    }else{
      localStorage.setItem("myTodoList", JSON.stringify(this.todoList));
    }
  }

  addTodo(item){
    let newList = this.todoList.unshift(item);
    localStorage.setItem("myTodoList", JSON.stringify(this.todoList));
    return newList
  }

  doneTodo(id){
    this.todoList = JSON.parse(localStorage.getItem("myTodoList"));
    let newList = [...this.todoList]
    let todo = newList.find(item => item.id ===id);
    todo.isDone = true;
    localStorage.setItem("myTodoList", JSON.stringify(newList));
    return newList
  }

  removeTodo(id){
    let newList = this.todoList.filter((todo:any)=>todo.id != id)
    this.todoList = newList
    localStorage.setItem("myTodoList", JSON.stringify(this.todoList));
    return this.todoList;
  }

  removeAllItems(){
    this.todoList = [];
    localStorage.setItem("myTodoList", JSON.stringify(this.todoList));
    return this.todoList;
  }
}
