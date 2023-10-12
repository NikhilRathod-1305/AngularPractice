import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    Practice2Component,
    Practice3Component,
  ],
  imports: [BrowserModule,
            AppRoutingModule, 
            UserModule, 
            BrowserAnimationsModule,
             FormsModule,
            ReactiveFormsModule,
            HttpClientModule
          ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
