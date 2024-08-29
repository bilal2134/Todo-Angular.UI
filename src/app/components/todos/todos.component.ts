import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo.model';
import { TodoService } from 'src/app/services/todo.service';
// existing imports
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
constructor(private todoService: TodoService) { }
todos: Todo[] = [];
newTodo: Todo = {
  id: '',
  description: '',
  createdDate: new Date(),
  isCompleted: false,
  completedDate: new Date(),
  isDeleted: false,
  deletedDate: new Date()

};
  ngOnInit(): void {
    this.todoService.getAllTodos()
    .subscribe({
      next: (todos) => {
        this.todos = todos;
      },
    })
  }
  
getAllTodos() {
  this.todoService.getAllTodos()
  .subscribe({
    next: (todos) => {
      this.todos = todos;
    }
  });
}



addTodo() {
  console.log(this.newTodo);
  this.todoService.addTodo(this.newTodo)
    .subscribe({
      next: (todo) => {
       this.getAllTodos();
      }
    });

    
    }
  
    onCompletedChange(id: string, todo:Todo){
      todo.isCompleted = !todo.isCompleted;

      this.todoService.updateTodo(id, todo)
      .subscribe({
        next: (response) => {
          this.getAllTodos();
        }
      });


    }


    deleteTodo(id: string){

      this.todoService.deleteTodo(id)
      .subscribe({
        next: (response) => {
          this.getAllTodos();
        }
      });
      
    }

  


}


