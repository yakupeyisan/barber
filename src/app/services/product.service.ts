import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { Product } from "../models/product";

@Injectable({providedIn:'root'})
export class ProductService extends BaseService<Product>{
    override path: string='products';
}