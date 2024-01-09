import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";

export const isLoginGuard:CanActivateFn= (route,state):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree =>{
    let router = inject(Router);
    let authService = inject(AuthService);
    if (typeof localStorage == 'undefined') return false;
    let hasToken=localStorage.getItem("token")!=null;
    if(!hasToken){
        router.navigateByUrl('/admin/login');
    }
    return authService.isLogin().pipe(tap({
        error:(err)=>{ 
            authService.logout();
        }
    }));
}

export const isLogoutGuard:CanActivateFn= (route,state):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree =>{

    let router = inject(Router);
    if (typeof localStorage == 'undefined') return false;
    let hasNotToken=localStorage.getItem("token")==null;
    if(!hasNotToken){
        router.navigateByUrl('/admin/home');
    }
    return hasNotToken;
}
