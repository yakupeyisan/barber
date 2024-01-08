import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export const isLoginGuard:CanActivateFn= (route,state):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree =>{
    console.log(route.url); 
    return true;
    const router = inject(Router);
    let isLogin=Math.round(Math.random());
    alert(isLogin);
    if(isLogin==0){
        router.navigateByUrl('/admin/login');
    }
    return isLogin==1;
}

export const isLogoutGuard:CanActivateFn= (route,state):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree =>{
    
    const router = inject(Router);
    let isLogin=Math.round(Math.random());
    if(isLogin==0){
        router.navigateByUrl('/admin');
    }
    return isLogin==1;
}
