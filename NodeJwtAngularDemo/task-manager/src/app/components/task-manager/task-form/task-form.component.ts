import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  title: string = ''
  description: string = ''

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    const data = {
      title: this.title,
      description: this.description
    }

    this.taskService.addTask(data)
      .subscribe(() => {
        console.log('Task Added!')
        this.title = ''
        this.description = ''
      })
  }
}
