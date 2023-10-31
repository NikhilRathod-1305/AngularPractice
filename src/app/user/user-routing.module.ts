import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailGuard } from '../shared_services/user-detail.guard';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from '../common_components/page-not-found/page-not-found.component';

  const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path :'users',component:UserComponent},
     { path:'users/add',component:UserAddComponent},
      { path: 'users/edit/:id', component: UserEditComponent ,canActivate:[UserDetailGuard]},
      {path: 'users/:id',component:UserDetailsComponent,canActivate:[UserDetailGuard]},
      { path: '**', component: PageNotFoundComponent }
    ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UserRoutingModule { 
}