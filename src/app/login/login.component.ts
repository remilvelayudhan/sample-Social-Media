import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, public _userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  login() {
    //console.log(this.loginForm.value);
    this._userService.getUser(this.loginForm.get('email')?.value).subscribe(res => {
      console.log(res[0]);
      if (res[0] == null) {
        console.log("account does not exist");
        this.snackbar.open('Account does not exist', 'ok');
      } else {
        if (res[0].password === this.loginForm.value.password) {
          console.log("matched");
          this.snackbar.open('Login successful', 'ok');
          //this.userService.user = res;
          localStorage.setItem('user', JSON.stringify(res[0]));
          this.router.navigate(['/posts']);
        } else {
          console.log("incorrect password");
          this.snackbar.open('Incorrect password', 'ok');
        }
      }

    })

  }
} 
