import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  userEamil: any
  userNotFound!: string
  passwordType: boolean = false


  constructor(
    private fb: FormBuilder,
    private authSer: AuthService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })


  }

  onSubmit() {
    this.authSer.getUserEmail(this.loginForm.value.email).subscribe((res) => {
      this.userEamil = res.email == this.loginForm.value.email
      console.log(res)

      if (!this.userEamil) {
        this.userNotFound = "User Not Exist"
        this.userEamil
        this.loginForm.reset()
      } else {
        this.authSer.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res) => {
          console.log(res);
          window.location.href = '/';
        })
      }
    })

  }

  changeType() {
    this.passwordType = !this.passwordType
  }



  get email() {
    return this.loginForm.get('email');
  }



}
