import { BaseModel } from "./base/base-model";
import { Product } from "./product";

export interface Order extends BaseModel<number>{
    fullName:string|null;
    phoneNumber:string|null;
    email:string|null;
    cargoBranch:string|null;
    sendDate:string|null;
    sendCode:string|null;
    isSend:boolean|null;
    isCancel:boolean|null;
    cancelledAt:string|null;
    cancelledUser:number|null;
}
export interface OrderWithProduct extends Order{
    products:Product[]
    amount:number;
}