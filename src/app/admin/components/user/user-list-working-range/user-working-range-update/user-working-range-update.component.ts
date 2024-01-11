import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../../services/user.service';
import { UserWorkingRange } from '../../../../../models/user-working-range';

@Component({
  selector: 'app-user-working-range-update',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-working-range-update.component.html',
  styleUrl: './user-working-range-update.component.scss'
})
export class UserWorkingRangeUpdateComponent {
    updateForm!:FormGroup
    @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
    constructor(
      private formBuilder:FormBuilder,
      private toastrService:ToastrService,
      private userService:UserService){}

    createUpdateForm(userWorkingRange:UserWorkingRange){
      this.updateForm=this.formBuilder.group({
        id:[userWorkingRange.id,Validators.required],
        userId:[userWorkingRange.userId,Validators.required],
        dayOfWeek:[userWorkingRange.dayOfWeek,Validators.required],
        startTime:[userWorkingRange.startTime,Validators.required],
        endTime:[userWorkingRange.endTime,Validators.required]
      })
    }
    onSubmit(){
      if(!this.updateForm.valid){
        this.toastrService.warning("Please check the form.","Warning");
        return;
      }
      let userWorkingRange:UserWorkingRange=Object.assign({},this.updateForm.value);
      this.userService.setWorkingRange(userWorkingRange).subscribe(result=>{
        if(typeof document ==undefined) return;
        document.querySelector(".update-working-range-modal")?.classList.toggle("show");
        document.querySelector(".modal-backdrop")?.classList.toggle("show");
        this.onLoad.emit();
      })
    }
}
