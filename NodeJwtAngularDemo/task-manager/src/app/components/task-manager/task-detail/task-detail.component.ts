import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Task } from 'src/app/models/task';

import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task = null
  msg: string = 'Loading...'

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id

    this.taskService.getSingleTask(id).subscribe((data) => {
      this.task = data
    }, (err) => {
      this.msg = 'No Task Found!'
    })
  }

}
