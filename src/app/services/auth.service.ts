import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserForLoginDto } from "../dtos/user-for-login-dto";
import { Observable } from "rxjs";
import { DataResponse } from "../models/responses";
@Injectable({providedIn:'root'})
export class AuthService{
    
    constructor(private httpClient:HttpClient){}

    login(userForLoginDto:UserForLoginDto){
        return this.httpClient.post<Observable<DataResponse<string>>>("http://localhost/auth/login",userForLoginDto)
    }
}