import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Response } from "../../models/responses";
import { environment } from "../../environments/environment";

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
    HttpHandlerFn):Observable<HttpEvent<any>> => {
       let authService = inject(AuthService);
       let userToken = localStorage.getItem("token")??''; 
       let modifiedReq = req.clone({
         headers: req.headers.set('Authorization', `Bearer ${userToken}`),
       });
       return next(modifiedReq).pipe(tap({
        error:(err)=>{
            if(err.status==401){
                authService.logout();
            }
        }
    }))
    };
    export const loaderInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
        HttpHandlerFn):Observable<HttpEvent<any>> => {
            let ngxUiLoaderService = inject(NgxUiLoaderService);
            let taskId=makeRandom(6);
            ngxUiLoaderService.start(taskId);
           return next(req).pipe(tap({
                next:(event)=>{
                    setTimeout(()=>{
                        ngxUiLoaderService.stop(taskId);
                    },300)
                },
                error:(err)=>{
                    setTimeout(()=>{
                        ngxUiLoaderService.stop(taskId);
                    },300)
                }
            }))
        };

export const routePageInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
    HttpHandlerFn):Observable<HttpEvent<any>> => {
        let router = inject(Router);
        let authService = inject(AuthService);
        return next(req).pipe(tap({
            error:(err)=>{
                if(err.status==401){
                    authService.logout();
                    router.navigateByUrl("/admin/login");
                }
                else if(err.status==403){
                    if(environment.env=='development'){
                        authService.setAllCredentials().subscribe();
                    }
                    router.navigateByUrl('/admin/error/forbidden')
                }
                else if(err.status==404){
                    router.navigateByUrl('/admin/error/not-found')
                }
                else if(err.status==500){
                    router.navigateByUrl('/admin/error/internal-server-error')
                }
            }
        }))
    };
export const notificationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:HttpHandlerFn):
Observable<HttpEvent<any>> => {
        let toastrService = inject(ToastrService);
        return next(req).pipe(tap({
            next:(event)=>{
                if(event instanceof HttpResponse){
                    let e=event as HttpResponse<Response>;
                    if(e.body?.message!=undefined) toastrService.success(e.body?.message,"Başarılı")
                }
            },
            error:(err)=>{
                toastrService.error(err.message,"Hata")
            }
        }))
    };
function makeRandom(lengthOfCode: number) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
        return text;
    }