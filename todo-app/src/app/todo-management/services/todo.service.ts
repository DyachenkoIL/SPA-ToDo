import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToDo } from "../models/todo.model";
import { Observable, of } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    private todoUrl = "api/todo"

    private key: number = 0;
    private collection_name: string = 'ToDoList';

    constructor(
        ) {
        let collection: ToDo[] = [];
        collection.push({ Id: 0, Name: 'Hello', Body: "Make better todo-list ever", DateCreation: new Date(), DateModification: null });
        this.key = 1;
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }

    get(id: number): Observable<ToDo> {
        return JSON.parse(localStorage.getItem(this.collection_name))[id];
    }

    getAll(): Observable<ToDo[]> {
        return JSON.parse(localStorage.getItem(this.collection_name));
    }
    
    create(todo: ToDo): number {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        todo.Id = this.key++;
        todo.DateCreation = new Date();
        collection.push(todo);
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
        return todo.Id;
    }
    
    update(todo: ToDo) {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        todo.DateModification = new Date();
        collection[todo.Id] = todo;
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }
    
    delete(id: number): void {
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        collection.splice(collection.findIndex(item => item.Id === id), 1);
        localStorage.setItem(this.collection_name, JSON.stringify(collection));
    }

    search(term: string): ToDo[] {
        if (!term.trim()) {
            return JSON.parse(localStorage.getItem(this.collection_name));
        }
        let collection = JSON.parse(localStorage.getItem(this.collection_name));
        collection.splice(collection.findIndex(item => item.Name === term));
        return JSON.parse(collection);
    }
}