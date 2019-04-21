import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoRoutingModule } from './todo-routing.module';
import { CoreModule } from '../core/core.module';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { ToDoCreateComponent } from './components/todo-create/todo-create.component';
import { ToDoEditComponent } from './components/todo-edit/todo-edit.component';
import { ToDoFormComponent } from './components/todo-form/todo-form.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ToDoResolveService } from './services/todo-resolve.service';
import { ToDoService } from './services/todo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ToDoRoutingModule
  ],
  declarations: [
    ToDoListComponent,
    ToDoCreateComponent,
    ToDoEditComponent,
    ToDoFormComponent
  ],
  providers: [
    AuthGuard,
    ToDoResolveService,
    ToDoService
  ]
})
export class ToDoModule { }