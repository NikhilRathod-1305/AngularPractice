import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  { path :'user',component:UserComponent},
   { path:'user/user-add',component:UserAddComponent},
   { path:'user/user-list',component:UserListComponent},
    { path:'user/user-edit',component:UserEditComponent}, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
