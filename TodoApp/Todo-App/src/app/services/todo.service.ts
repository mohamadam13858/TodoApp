import { Injectable } from '@angular/core';

export interface Todo {
  id: string;
  title: string;
  categoryId: string;
  completed: boolean;
}




@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly STG = 'todo'


  constructor() {
    if (!localStorage.getItem(this.STG)) {
      localStorage.setItem(this.STG, JSON.stringify(this.hardcode()))
    }
  }


  private hardcode(): Todo[] {
    return [
      { id: '1', title: 'یادگیریه انگولار', categoryId: '1', completed: false },
      { id: '2', title: 'درس خواندن', categoryId: '2', completed: true },

    ];
  }


  getTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.STG)!) || [];
  }


  addTodo(todo: Todo) {
    const todos = this.getTodos();
    todos.push(todo)
    localStorage.setItem(this.STG, JSON.stringify(todos))
  }


  updateTodo(updatedTodo: Todo) {
    const todos = this.getTodos().map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    localStorage.setItem(this.STG, JSON.stringify(todos))
  }


  toggleTodo(todo: Todo): void {
    const todos = this.getTodos();
    const index = todos.findIndex(t => t.id === todo.id);
    if (index !== -1) {
      todos[index].completed = !todos[index].completed; // تغییر وضعیت
      localStorage.setItem(this.STG, JSON.stringify(todos));
    }
  }



  deleteTodo(id: string) {
    const todos = this.getTodos().filter(todo => todo.id !== id)

    localStorage.setItem(this.STG, JSON.stringify(todos))
  }











}



