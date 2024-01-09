import { BaseTimeStampModel } from "./base/base-time-stamp-model";
import { Service } from "./service";

export interface Appointment extends BaseTimeStampModel<number>{
    userId:number;
    fullName:string|null;
    phoneNumber:string|null;
    email:string|null;
    startDate:string|null;
    endDate:string|null;
    isCompleted:boolean|null;
} 

export interface AppointmentService extends Appointment{
    services:Service[];
    amount:number|null;
}