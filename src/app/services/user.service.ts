import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserForLoginDto } from "../dtos/user-for-login-dto";
import { Observable } from "rxjs";
import { DataResponse } from "../models/responses";
import { User } from "../models/user";
@Injectable({providedIn:'root'})
export class UserService{
    
    constructor(private httpClient:HttpClient){}

    getAll():Observable<DataResponse<User[]>>{
        return this.httpClient.get<DataResponse<User[]>>("http://api.bysalon.com.tr/users/get-all")
    }
}