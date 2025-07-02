import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
passwordType : boolean = false
  newUser!: FormGroup
  constructor(
    private fb: FormBuilder,
    private authSer: AuthService
  ) {

  }
  ngOnInit(): void {

    this.newUser = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }


  resgister() {
    this.authSer.postUser(this.newUser.value).subscribe((res) => {
      console.log(res);
      this.newUser.reset()
      window.location.href = '/user/login';
    })

  }


  changeType(){
    this.passwordType = !this.passwordType
  }

 get email() {
    return this.newUser.get('email');
  }
  get firstName() {
    return this.newUser.get('firstName');
  }


}
