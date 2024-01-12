import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { Category } from "../models/category";

@Injectable({providedIn:'root'})
export class CategoryService extends BaseService<Category>{
    override path: string='categories';
}