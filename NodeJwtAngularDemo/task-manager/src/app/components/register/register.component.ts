import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

function passwordMatch(form: FormGroup){
  const password = form.get('password')
  const confirmpassword = form.get('confirmPassword')

  if (password.value !== confirmpassword.value){
    confirmpassword.setErrors({ passwordMatch: true})
  }else {
    confirmpassword.setErrors(null)
  }

  return null
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.registerForm = this.builder.group({
      name:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      username:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:''
    }, {
      validators: [passwordMatch]
    })
  }

  handleSubmit() {
    console.log(this.registerForm.value)
  }
}
