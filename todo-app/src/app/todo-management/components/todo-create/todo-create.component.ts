import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToDo } from "../../models/todo.model";
import { ToDoService } from "../../services/todo.service";

@Component({
    selector: 'app-todo-create',
    templateUrl: './todo-create.component.html'
})
export class ToDoCreateComponent implements OnInit {
    private todo: ToDo;

    constructor(private router: Router, private todoService: ToDoService) {}

    ngOnInit() {
        this.todo = new ToDo();
    }

    save() {
        this.todoService.post(this.todo);
        this.router.navigate([`/todo`]);
    }
}