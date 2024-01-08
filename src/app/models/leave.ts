import { BaseModel } from "./base/base-model";

export interface Leave extends BaseModel<number>{
    userId:number;
    startDate:string|null;
    endDate:string|null;
}