import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserForLoginDto } from "../dtos/user-for-login-dto";
import { Observable } from "rxjs";
import { DataResponse } from "../models/responses";
import { User, UserSetClaim, UserWithClaim, UserWithWorkingRanges } from "../models/user";
import { environment } from "../environments/environment";
import { UserForUpdateDto } from "../dtos/user-for-update-dto";
import { UserForCreateDto } from "../dtos/user-for-create-dto";
import { UserWorkingRange } from "../models/user-working-range";
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
    addClaim(userSetClaim:UserSetClaim):Observable<Response>{
        return this.httpClient.post<Response>(environment.getApiUrl('/users/add-claim'),userSetClaim);
    }
    removeClaim(userSetClaim:UserSetClaim):Observable<Response>{
        return this.httpClient.post<Response>(environment.getApiUrl('/users/remove-claim'),userSetClaim);
    }
    getByIdWithWorkingRanges(userId:number):Observable<DataResponse<UserWithWorkingRanges>>{
        return this.httpClient.get<DataResponse<UserWithWorkingRanges>>(environment.getApiUrl('/users/get-by-id-with-working-ranges/'+userId));
    }
    addWorkingRange(userWorkingRange:UserWorkingRange):Observable<Response>{
        return this.httpClient.post<Response>(environment.getApiUrl('/users/add-working-range'),userWorkingRange)
    }
    removeWorkingRangeById(userWorkingRangeId:number):Observable<Response>{
        return this.httpClient.get<Response>(environment.getApiUrl('/users/remove-working-range/'+userWorkingRangeId))
        
    }
    setWorkingRange(userWorkingRange:UserWorkingRange):Observable<Response>{
        return this.httpClient.post<Response>(environment.getApiUrl('/users/set-working-range'),userWorkingRange)
    }
}