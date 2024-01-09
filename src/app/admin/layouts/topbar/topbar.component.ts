import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  constructor(private authService:AuthService,private router:Router){}
  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/admin/login")
  }
  toggleSidebar(){
    if(typeof document == undefined) return;
    if(typeof window == undefined) return;
    document.body.classList.contains('sidebar-enable')?document.body.classList.remove("sidebar-enable"):document.body.classList.add('sidebar-enable');
    let a = document.body.getAttribute("data-sidebar-size")
    992 <= document.body.offsetWidth &&
        (null == a
            ? null == document.body.getAttribute("data-sidebar-size") || "lg" == document.body.getAttribute("data-sidebar-size")
                ? document.body.setAttribute("data-sidebar-size", "sm")
                : document.body.setAttribute("data-sidebar-size", "lg")
            : "md" == a
            ? "md" == document.body.getAttribute("data-sidebar-size")
                ? document.body.setAttribute("data-sidebar-size", "sm")
                : document.body.setAttribute("data-sidebar-size", "md")
            : "sm" == document.body.getAttribute("data-sidebar-size")
            ? document.body.setAttribute("data-sidebar-size", "lg")
            : document.body.setAttribute("data-sidebar-size", "sm"));
  }
}
