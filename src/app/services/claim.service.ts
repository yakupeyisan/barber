import { Injectable } from "@angular/core";
import { BaseService } from "./base/base.service";
import { Claim } from "../models/claim";

@Injectable({providedIn:'root'})
export class ClaimService extends BaseService<Claim>{
    override path: string='claims';
}