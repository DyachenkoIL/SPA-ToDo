import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { ToDoCreateComponent } from './components/todo-create/todo-create.component';
import { ToDoEditComponent } from './components/todo-edit/todo-edit.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ToDoResolveService } from './services/todo-resolve.service';

const routes: Routes = [
    {
        path: '',
        component: ToDoListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'new',
        component: ToDoCreateComponent
    },
    {
        path: ':todoId',
        component: ToDoEditComponent,
        resolve: { todo: ToDoResolveService }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }