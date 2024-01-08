import { BaseModel } from "./base/base-model";

export interface UserWorkingRange extends BaseModel<number>{
    userId:number;
    dayOfWeek:number|null;
    startTime:string|null;
    endTime:string|null;
}