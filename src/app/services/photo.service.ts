import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { Photo } from "../models/photo";

@Injectable({providedIn:'root'})
export class PhotoService extends BaseService<Photo>{
    override path: string='photos';
}