import { Component, OnInit } from '@angular/core';
import { User, UserSetClaim, UserWithClaim } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ClaimService } from '../../../../services/claim.service';
import { Claim } from '../../../../models/claim';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-set-credential',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-set-credential.component.html',
  styleUrl: './user-set-credential.component.scss'
})
export class UserSetCredentialComponent implements OnInit {
  userWithClaim!:UserWithClaim
  claims:Claim[]=[]
  constructor(
    private userService:UserService,
    private claimService:ClaimService,
    private activatedRoute:ActivatedRoute
    ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.getByUserId(param["userId"])
    })
  }

  getByUserId(userId:number){
    this.userService.getByIdWithClaims(userId).subscribe(res=>{
      this.userWithClaim=res.data
      this.getClaims();
    })
  }
  getClaims(){
    this.claimService.getAll().subscribe(result=>{
      this.claims=result.data;
    })
  }
  checked(claim:Claim):boolean{
    if(this.userWithClaim==undefined) return false;
    return this.userWithClaim?.claims?.find(x=>x.id==claim.id)!==undefined
  }
  changeSwitch(claim:Claim){
    let userSetClaim:UserSetClaim={
      userId:this.userWithClaim.id,
      claimId:claim.id
    }
    if(this.checked(claim)){
      this.userService.removeClaim(userSetClaim).subscribe(result=>{
        let claimIndex=this.userWithClaim.claims.findIndex(x=>x.id==claim.id);
        this.userWithClaim.claims.splice(claimIndex,1);
      })
    }else{
      this.userService.addClaim(userSetClaim).subscribe(result=>{
        this.userWithClaim.claims.push(claim)
      })
    }
  }
}
