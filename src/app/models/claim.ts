import { BaseModel } from "./base/base-model";

export interface Claim extends BaseModel<number>{
    name:string;
}