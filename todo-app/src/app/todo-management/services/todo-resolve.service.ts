import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ToDo } from "../models/todo.model";
import { ToDoService } from "./todo.service";


@Injectable()
export class ToDoResolveService implements Resolve<ToDo> {

  constructor(private todoService: ToDoService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return route.params['todoId'] ? this.todoService.get(route.params['todoId']) : new ToDo();
  }
}