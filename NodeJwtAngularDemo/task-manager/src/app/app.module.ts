import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskFormComponent } from './components/task-manager/task-form/task-form.component';
import { TaskListComponent } from './components/task-manager/task-list/task-list.component';
import { TaskItemComponent } from './components/task-manager/task-list/task-item/task-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';
import { CustomValidatorDirective } from './directives/custom-validator.directive';
import { HighlightDirective } from './directives/highlight.directive'

const routes:Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tasks', component: TaskManagerComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    NavComponent,
    TaskDetailComponent,
    CustomValidatorDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
