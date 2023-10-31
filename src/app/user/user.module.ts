import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ForbiddenAlphabetsDirective } from '@src/app/shared_directives/forbidden-alphabets.directive';
import { ForbiddenNumbersDirective } from '@src/app/shared_directives/forbidden-numbers.directive';
import { TopNavComponent } from '@src/app/common_components/top-nav/top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { AlertComponent } from '../common_components/alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UserAddComponent,
    UserEditComponent,
    UserComponent,
    ForbiddenNumbersDirective,
    ForbiddenAlphabetsDirective,
    TopNavComponent,
    UserDetailsComponent,
    AlertComponent
  ],
  exports:[
    UserAddComponent,
    UserEditComponent,
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
    RouterLink,
    MatCardModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class UserModule { }
