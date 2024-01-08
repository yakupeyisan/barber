import { BaseModel } from "./base/base-model";
import { Product } from "./product";

export interface Category extends BaseModel<number>{
    name:string;
}
export interface CategoryWithProduct extends Category{
    products:Product[]
}