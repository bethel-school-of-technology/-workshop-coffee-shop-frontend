import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from '../../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  //Form Group to handle our form
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) { 
    this.loginForm = this.fb.group({
      username: [''],
      password:['']
    })
  }

  ngOnInit(): void {
  }

  // Handling the submission from the form in HTML file
  loginUser(){
    console.log("Login  User Called");
    // console.log(this.loginForm.value);
    this.userService.signIn(this.loginForm.value).subscribe((res:any) => {
      // console.log(res);

      //Checking if User Successfully Logged In
      if(res.status == 200){
        localStorage.setItem('access-token', res.token);
        this.router.navigate(['admin']);
      } else {
        window.alert("Error in authentication, please check");
        this.router.navigate(['home']);
      }

    })
  }

}
