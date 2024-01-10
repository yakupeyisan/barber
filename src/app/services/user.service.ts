import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserForLoginDto } from "../dtos/user-for-login-dto";
import { Observable } from "rxjs";
import { DataResponse } from "../models/responses";
import { User, UserWithClaim } from "../models/user";
import { environment } from "../environments/environment";
import { UserForUpdateDto } from "../dtos/user-for-update-dto";
import { UserForCreateDto } from "../dtos/user-for-create-dto";
@Injectable({providedIn:'root'})
export class UserService{
    
    constructor(private httpClient:HttpClient){}

    getAll():Observable<DataResponse<User[]>>{
        return this.httpClient.get<DataResponse<User[]>>(environment.getApiUrl("/users/get-all"))
    }
    getById(userId:number):Observable<DataResponse<User>>{
        return this.httpClient.get<DataResponse<User>>(environment.getApiUrl("/users/get-by-id/"+userId));
    }
    getByIdWithClaims(userId:number):Observable<DataResponse<UserWithClaim>>{
        return this.httpClient.get<DataResponse<UserWithClaim>>(environment.getApiUrl("/users/get-by-id-with-claims/"+userId));
    }
    create(userForCreateDto:UserForCreateDto):Observable<Response>{
        return this.httpClient.post<Response>(environment.getApiUrl("/users/create"),userForCreateDto);
    }
    update(userForUpdateDto:UserForUpdateDto):Observable<Response>{
        return this.httpClient.post<Response>(environment.getApiUrl("/users/update"),userForUpdateDto);
    }
    deleteById(userId:number):Observable<Response>{
        return this.httpClient.delete<Response>(environment.getApiUrl("/users/delete-by-id/"+userId));
    }
}