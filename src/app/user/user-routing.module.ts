import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailGuard } from '../shared_services/user-detail.guard';
import { UserDetailsComponent } from './user-details/user-details.component';

  const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path :'user',component:UserComponent},
     { path:'user/add',component:UserAddComponent},
      { path: 'user/edit/:id', component: UserEditComponent ,canActivate:[UserDetailGuard]},
      {path: 'user/:id',component:UserDetailsComponent,canActivate:[UserDetailGuard]}
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserRoutingModule { 
}