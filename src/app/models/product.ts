import { BaseTimeStampModel } from "./base/base-time-stamp-model";
import { Category } from "./category";
import { Photo } from "./photo";

export interface Product extends BaseTimeStampModel<number>{
    categoryId:number;
    name:string|null;
    description:string|null;
    tags:string|null;
    price:number|null;
    isActive:boolean|null;
}
export interface ProductWithCategory extends Product{
    category:Category
}
export interface ProductWithPhoto extends Product{
    photos:Photo[]
}
export interface ProductWithPhotoAndCategory extends Product{
    category:Category
    photos:Photo[]
}