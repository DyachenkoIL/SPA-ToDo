import { Routes } from '@angular/router';

export const routes: Routes = [  
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: './todo-management/todo.module#ToDoModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];
