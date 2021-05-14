import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    if(this.auth.retrieveUser() == null){
      this.router.navigate(['/login']);
    }
  }

}
