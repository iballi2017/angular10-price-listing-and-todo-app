export class Todo {

  id: string;
  todo: string;
  date;
  time;
  isDone:boolean;
  constructor(id: string, todo: string, date, time, isDone) {
    this.id = id;
    this.todo = todo;
    this.date = date;
    this.time = time;
this.isDone = isDone
  }
}
