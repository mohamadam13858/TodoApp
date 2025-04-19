import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {


  todos: Todo[]
  newTodoTitle: string
  editTodoId: string | null
  editTodoTitle: string

  edit: boolean = false



  constructor(private todoService: TodoService) {

  }


  ngOnInit(): void {
    this.getTodos()
  }


  getTodos() {
    this.todos = this.todoService.getTodos()
  }


  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        id: (this.todos.length + 1).toString(),
        title: this.newTodoTitle,
        categoryId: '1',
        completed: false
      };
      this.todoService.addTodo(newTodo);
      this.newTodoTitle = '';
      this.getTodos();
    }
  }

  editTodo(todo: Todo) {
    this.editTodoId = todo.id;
    this.editTodoTitle = todo.title;
    this.edit = true
  }

  upDateTodo() {
    if (this.editTodoId && this.editTodoTitle.trim()) {
      const updatedTodo: Todo = {
        id: this.editTodoId,
        title: this.editTodoTitle,
        categoryId: '1',
        completed: false
      }
      this.todoService.updateTodo(updatedTodo)
      this.editTodoId = null;
      this.editTodoTitle = '';
      this.getTodos()
      this.edit = false
    }
  }


  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
    this.getTodos()
  }



  completed(todo: Todo) {


    this.todoService.toggleTodo(todo);
    this.getTodos()
    
    

  }
















}
