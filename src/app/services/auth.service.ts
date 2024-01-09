import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserForLoginDto } from "../dtos/user-for-login-dto";
import { Observable } from "rxjs";
import { DataResponse } from "../models/responses";
import { Router } from "@angular/router";
@Injectable({providedIn:'root'})
export class AuthService{
    
    constructor(private httpClient:HttpClient,private router:Router){}

    login(userForLoginDto:UserForLoginDto):Observable<DataResponse<string>>{
        return this.httpClient.post<DataResponse<string>>("http://api.bysalon.com.tr/auth/login",userForLoginDto)
    }
    isLogin():Observable<boolean>{
        return this.httpClient.post<boolean>("http://api.bysalon.com.tr/auth/is-login",{})
    }
    logout(){
        localStorage.removeItem("token");
        this.router.navigateByUrl("/admin/login");
    }
}