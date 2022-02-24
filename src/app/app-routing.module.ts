import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent, FormEntryComponent } from './index';

const routes: Routes = [

  { path: 'entery', component: FormEntryComponent },
  { path: 'userList', component: UsersListComponent },
  { path: "", redirectTo: "entery", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
