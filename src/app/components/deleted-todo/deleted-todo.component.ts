import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrls: ['./deleted-todo.component.css']
})
export class DeletedTodoComponent implements OnInit {
todos: Todo[] = [];

constructor(private todoService: TodoService) {}
  


ngOnInit() {
  this.getAllDeletedTodos();
}

getAllDeletedTodos() {
  this.todoService.getAllDeletedTodos().subscribe({
    next: (res) => {
      this.todos = res;
    },
  })

}


undoDeleteTodo(id:String, todo:Todo){
this.todoService.undoDeleteTodo(id, todo).subscribe({
  next: (res) => {
    this.getAllDeletedTodos();
  },
})


}
}