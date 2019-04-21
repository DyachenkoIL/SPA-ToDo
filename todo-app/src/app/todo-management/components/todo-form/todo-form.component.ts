import { Component, Input, EventEmitter, Output } from "@angular/core";
import { ToDo } from "../../models/todo.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html'
})
export class ToDoFormComponent {
    @Input() todo: ToDo;
    @Output() submit: EventEmitter<ToDo> = new EventEmitter<ToDo>();

    constructor(private router: Router) {}

    onSubmit() {
        this.submit.emit(this.todo);
    }

    onBack() {
        this.router.navigate([`/todo`]);
    }
}