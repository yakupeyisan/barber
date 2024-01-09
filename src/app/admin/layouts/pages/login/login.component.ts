import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { UserForLoginDto } from '../../../../dtos/user-for-login-dto';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy{
  loginForm!:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
    ){}
  ngOnDestroy(): void {
    if (typeof document !== 'undefined') document.body.className=""
  }
  ngOnInit(): void {
    this.createLoginForm();
    if (typeof document !== 'undefined') document.body.className="authentication-bg"
  }
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required],
    })
  }
  login(){
    if(!this.loginForm.valid) return;
    let loginDto:UserForLoginDto=Object.assign({},this.loginForm.value);
    this.authService.login(loginDto).subscribe(result=>{
      localStorage.setItem("token",result.data);
      this.router.navigateByUrl("/admin/home")
    },error=>{
      console.log(error);
    })
  }
}
