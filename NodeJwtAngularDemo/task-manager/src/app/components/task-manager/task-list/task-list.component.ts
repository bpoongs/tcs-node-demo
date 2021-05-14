import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from 'src/app/models/task'
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = []

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskService.getTasks().subscribe((data) => {
      console.log(data);
      if(data == null){
        this.router.navigate(['/login']);
      }
      this.tasks = data 
    })
  }
}
