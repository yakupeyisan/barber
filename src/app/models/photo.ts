import { BaseModel } from "./base/base-model";

export interface Photo extends BaseModel<number>{
    smallUrl:string|null;
    mediumUrl:string|null;
    largeUrl:string|null;
    isShowSlider:boolean|null;
    isShowGallery:boolean|null;
}