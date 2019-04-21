import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToDo } from "../../models/todo.model";
import { ToDoService } from "../../services/todo.service";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styles: [`
        .test-class { background-color: #ff9e9e; }
    `]
})
export class ToDoListComponent implements OnInit {
    private list: ToDo[];
    private today: Date = new Date();
    private todayCondition: boolean = false;

    constructor(private router: Router, private todoService: ToDoService) {}

    ngOnInit() {
        this.list = this.todoService.getAll();
    }

    edit(id: number) {
        this.router.navigate([`/todo/${id}`]);
    }

    add() {
        this.router.navigate([`/todo/new`]);
    }

    delete(id: number) {
        this.todoService.delete(id);
        this.list.splice(this.list.findIndex(item => item.Id === id), 1);
    }
}