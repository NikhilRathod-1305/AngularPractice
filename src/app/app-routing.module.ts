import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserDetailGuard } from './shared_services/user-detail.guard';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path :'user',component:UserComponent},
   { path:'user/user-add',component:UserAddComponent},
    { path: 'user/user-edit/:id', component: UserEditComponent },
    {path: 'user/:id',component:UserDetailsComponent,canActivate:[UserDetailGuard]} 

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
