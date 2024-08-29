import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseApiUrl : string = 'https://localhost:7111';
  constructor(private http: HttpClient) { }


  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/controller');
  }


  addTodo(newTodo:Todo): Observable<Todo>{
    newTodo.id = '00000000-0000-0000-0000-000000000000';
    
    return this.http.post<Todo>(this.baseApiUrl + '/api/controller',newTodo);
  }

  updateTodo(id:string, todo:Todo): Observable<Todo>{
    return this.http.put<Todo>(this.baseApiUrl + '/api/controller/' + id, todo);
  }

  deleteTodo(id:string): Observable<Todo>{
    return this.http.delete<Todo>(this.baseApiUrl + '/api/controller/' + id);
  }

getAllDeletedTodos(): Observable<Todo[]>{ 
  return this.http.get<Todo[]>(this.baseApiUrl + '/api/controller/get-deleted-todos');

}

undoDeleteTodo(id:String, todo:Todo): Observable<Todo>{
  return this.http.put<Todo>(this.baseApiUrl + '/api/controller/undo-deleted-todo/' + id, todo);
}
}