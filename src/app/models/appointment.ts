import { BaseTimeStampModel } from "./base/base-time-stamp-model";

export interface Appointment extends BaseTimeStampModel<number>{
    userId:number;
    fullName:string|null;
    phoneNumber:string|null;
    email:string|null;
    startDate:string|null;
    endDate:string|null;
    isCompleted:boolean|null;
} 