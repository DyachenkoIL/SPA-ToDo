import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToDo } from "../../models/todo.model";
import { ToDoService } from "../../services/todo.service";
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
})
export class ToDoListComponent implements OnInit {

    private olist: Observable<ToDo[]>;
    private list: ToDo[];
    private today: Date = new Date();
    private todayCondition: boolean = false;
    private collection_name: string = 'ToDoList';
    constructor(private router: Router, private todoService: ToDoService) {}

    ngOnInit() {
        this.list = this.todoService.getAll();
    }

    update(id: number) {
        this.router.navigate([`/todo/${id}`]);
    }

    create() {
        this.router.navigate([`/todo/new`]);
    }

    delete(id: number) {
        this.todoService.delete(id);
        this.list.splice(this.list.findIndex(item => item.Id === id), 1);
    }

    check(Name : string){
        
    }
    search(Name : string){
        //if (!Name.trim()) {
        //    this.router.navigate([`/todo`]);
        //}
        console.log(Name);
        let result = this.list.filter(item => item.Name === Name);
        console.log(result);
        //this.list = collection.filter(item => item.Name === Name);
    }
}