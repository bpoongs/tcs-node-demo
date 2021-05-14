import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/task'

import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;

  constructor(private service: TaskService) { }

  ngOnInit(): void {
  }

  handleDelete() {
    this.service.removeTask(this.task._id)
      .subscribe(
        () => console.log('Task Deleted'),
        err => console.log(err)
      )
  }
}
