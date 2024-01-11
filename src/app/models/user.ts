import { Appointment } from "./appointment";
import { BaseModel } from "./base/base-model";
import { BaseTimeStampModel } from "./base/base-time-stamp-model";
import { Claim } from "./claim";
import { Leave } from "./leave";
import { UserWorkingRange } from "./user-working-range";

export interface User extends BaseTimeStampModel<number>{
    imageUrl:string|null;
    firstName:string;
    lastName:string;
    email:string;
}
export interface UserWithClaim extends User{
    claims:Claim[]
}
export interface UserWithWorkingRanges extends User{
    workingRanges:UserWorkingRange[]
}
export interface UserWithLeave extends User{
    leaves:Leave[]
}

export interface UserWithLeaveAndWorkingRange extends User{
    leaves:Leave[]
    workingRanges:UserWorkingRange[]
}
export interface UserWithAppointment extends User{
    appointments:Appointment[]
}
export interface UserWithAppointmentAndLeaveAndWorkingRange extends User{
    appointments:Appointment[]
    leaves:Leave[]
    workingRanges:UserWorkingRange[]
}
//Kullanmayacağız ama örnek olsun diye yazıyoruz
export interface UserWithWorkingRangeAndClaim extends User{
    workingRanges:UserWorkingRange[]
    claims:Claim[]
}
export interface UserSetClaim{
    userId:number;
    claimId:number;
}