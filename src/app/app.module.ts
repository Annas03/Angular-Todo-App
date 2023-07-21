import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { FooterComponent } from './component/footer/footer.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './component/error/error.component';
import { TasksService } from './services/tasks.service';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './component/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateTaskComponent,
    FooterComponent,
    TasksComponent,
    ErrorComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
