import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ClaimService } from '../../../../services/claim.service';
import { Claim } from '../../../../models/claim';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-set-credential',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-set-credential.component.html',
  styleUrl: './user-set-credential.component.scss'
})
export class UserSetCredentialComponent implements OnInit {
  user!:User
  claims:Claim[]=[]
  constructor(
    private userService:UserService,
    private claimService:ClaimService,
    private activatedRoute:ActivatedRoute
    ){}
  ngOnInit(): void {
    this.getClaims();
    this.activatedRoute.params.subscribe(param=>{
      this.getByUserId(param["userId"])
    })
  }

  getByUserId(userId:number){
    this.userService.getById(userId).subscribe(res=>{
      this.user=res.data
    })
  }
  getClaims(){
    this.claimService.getAll().subscribe(result=>{
      this.claims=result.data;
    })
  }
}
