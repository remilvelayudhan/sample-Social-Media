import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {


  createAccountForm!:FormGroup;

  constructor(private router :Router, private fb: FormBuilder,private _userService:UserService ) { }
 
  ngOnInit(): void {

    this.createAccountForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      userName: ['',[Validators.required, Validators.maxLength(10)]],
      password:['',[Validators.required, Validators.minLength(6)]]
  
    });
  }

  createAccount(){
    console.log(this.createAccountForm.value);
    this._userService.createUser(this.createAccountForm.value).subscribe(resp=>{
      console.log(resp);
        localStorage.setItem('user', JSON.stringify(resp));
        this.router.navigate(['/posts']);
    },err=>{
      console.log(err);
    })
 }

}
