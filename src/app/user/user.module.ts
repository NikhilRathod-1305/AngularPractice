import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateFormatPipe } from './DateFormatPipe'; 
import { ForbiddenNumbersDirective } from './../forbidden-numbers.directive';
import { ForbiddenAlphabetsDirective } from './../forbidden-alphabets.directive';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    UserComponent,
    DateFormatPipe,
    ForbiddenNumbersDirective,
    ForbiddenAlphabetsDirective,
    TopNavComponent

  ],
  exports:[
    UserAddComponent,
    UserEditComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    RouterLink
  ]
})
export class UserModule { }
