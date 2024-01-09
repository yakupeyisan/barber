import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.login({userName:"admin@admin.com",password:"1234"}).subscribe(res=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    })
  }
}
