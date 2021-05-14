import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {} //all the data of form
  errMsg: string = ''

  constructor(
    private user: UserService,
    private router: Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.user.login(this.model)
      .subscribe(user => {
        console.log(user);
        this.auth.storeUser(user);
        this.router.navigate(['/tasks'])
      }, err => {
        this.errMsg = err.error.msg
      })
  }
}
