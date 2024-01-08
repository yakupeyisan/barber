import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    if (typeof document !== 'undefined') document.body.className=""
  }
  ngOnInit(): void {
    if (typeof document !== 'undefined') document.body.className="authentication-bg"
  }
}
