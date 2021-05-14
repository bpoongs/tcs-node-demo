import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';

const apiUrl = 'http://localhost:3000/tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getTasks(): Observable<Task[]> {
    if(this.auth.retrieveUser()!==null){
    let httpOption = {
      headers : new HttpHeaders({
        'content-type': 'application-json',
        'Authorization': 'Bearer ' + this.auth.retrieveUser().token
      })
    }
    return this.http.get<Task[]>(apiUrl, httpOption)
  }
  else{
    return this.http.get<Task[]>(apiUrl);
  }
  }

  getSingleTask(id): Observable<Task> {
    return this.http.get<Task>(apiUrl + '/' + id)
  }

  addTask(data): Observable<Task> {
    return this.http.post<Task>(apiUrl, data)
  }

  removeTask(id): Observable<Task> {
    return this.http.delete<Task>(apiUrl + '/' + id)
  }
}
