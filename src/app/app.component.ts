import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxUiLoaderConfig, NgxUiLoaderModule, NgxUiLoaderService, Time } from 'ngx-ui-loader';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    SharedModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'barber';
  constructor(private ngxUiLoaderService:NgxUiLoaderService){}
  ngOnInit(): void {
    this.start();
  }

  start(){
  }
}
