import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToDo } from "../../models/todo.model";
import { ToDoService } from "../../services/todo.service";

@Component({
    selector: 'app-todo-edit',
    templateUrl: './todo-edit.component.html'
})
export class ToDoEditComponent implements OnInit {
    private todo: ToDo;

    constructor(private router: Router, private route: ActivatedRoute, private todoService: ToDoService) {}

    ngOnInit() {
        this.todo = this.route.snapshot.data['todo'];
    }

    save() {
        this.todoService.put(this.todo);
        this.router.navigate([`/todo`]);
    }
}