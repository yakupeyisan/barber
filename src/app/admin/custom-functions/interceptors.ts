import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ToastrService } from "ngx-toastr";

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
            ngxUiLoaderService.start();
           return next(req).pipe(tap({
                complete:()=>{
                    ngxUiLoaderService.stop();
                },
                error:(err)=>{
                    ngxUiLoaderService.stop();
                }
            }))
        };
export const notificationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:HttpHandlerFn):
Observable<HttpEvent<any>> => {
        let toastrService = inject(ToastrService);
        return next(req).pipe(tap({
            complete:()=>{
                toastrService.success("İşlem başarılı","Başarılı")
            },
            error:(err)=>{
                toastrService.error(err.message,"Hata")
            }
        }))
    };