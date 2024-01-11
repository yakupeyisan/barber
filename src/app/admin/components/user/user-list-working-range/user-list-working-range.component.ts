import { Component, OnInit, ViewChild } from '@angular/core';
import { UserWithWorkingRanges } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserWorkingRangeAddComponent } from './user-working-range-add/user-working-range-add.component';
import { UserWorkingRangeUpdateComponent } from './user-working-range-update/user-working-range-update.component';
import { UserWorkingRange } from '../../../../models/user-working-range';

@Component({
  selector: 'app-user-list-working-range',
  standalone: true,
  imports: [CommonModule,UserWorkingRangeAddComponent,UserWorkingRangeUpdateComponent],
  templateUrl: './user-list-working-range.component.html',
  styleUrl: './user-list-working-range.component.scss'
})
export class UserListWorkingRangeComponent  implements OnInit {
  @ViewChild(UserWorkingRangeAddComponent,{static:true}) userWorkingRangeAddComponent !: UserWorkingRangeAddComponent; 
  @ViewChild(UserWorkingRangeUpdateComponent,{static:true}) userWorkingRangeUpdateComponent !: UserWorkingRangeUpdateComponent;   
  userWithWorkingRanges:UserWithWorkingRanges|undefined
  days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute
    ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.getUserWithWorkingRangesById(param["userId"]);
    })
  }

  getUserWithWorkingRangesById(userId:number){
    this.userService.getByIdWithWorkingRanges(userId).subscribe(result=>{
      this.userWithWorkingRanges=result.data
    })
  }
  showAddModal(){
    this.userWorkingRangeAddComponent.createCreateForm(this.userWithWorkingRanges?.id??0);
  }
  showEditModal(userWorkingRange:UserWorkingRange|null){
    if(userWorkingRange==null) return;
    this.userWorkingRangeUpdateComponent.createUpdateForm(userWorkingRange);
  }
  deleteWorkingRangeById(id:number){
    this.userService.removeWorkingRangeById(id).subscribe(result=>{
      this.getUserWithWorkingRangesById(this.userWithWorkingRanges?.id??0);
    })
  }
}
