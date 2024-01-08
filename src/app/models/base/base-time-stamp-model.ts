import { BaseModel } from "./base-model";

export interface BaseTimeStampModel<T> extends BaseModel<T>{
    createdAt:string|null;
    createdUser:number|null;
    updatedAt:string|null;
    updatedUser:number|null;
    isUpdated:boolean|null;
    deletedAt:string|null;
    deletedUser:number|null;
    isDeleted:boolean|null;
}