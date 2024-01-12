import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { Service } from "../models/service";

@Injectable({providedIn:'root'})
export class ServiceService extends BaseService<Service>{
    override path: string='services';
}