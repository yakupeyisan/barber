import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../../services/user.service';
import { UserWorkingRange } from '../../../../../models/user-working-range';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-working-range-add',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-working-range-add.component.html',
  styleUrl: './user-working-range-add.component.scss'
})
export class UserWorkingRangeAddComponent {
  addForm!:FormGroup
  @Output() onLoad:EventEmitter<unknown>=new EventEmitter();
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private userService:UserService){}

  createCreateForm(userId:number){
    this.addForm=this.formBuilder.group({
      userId:[userId,Validators.required],
      dayOfWeek:['0',Validators.required],
      startTime:['',Validators.required],
      endTime:['',Validators.required]
    })
  }
  onSubmit(){
    if(!this.addForm.valid){
      this.toastrService.warning("Please check the form.","Warning");
      return;
    }
    let userWorkingRange:UserWorkingRange=Object.assign({},this.addForm.value);
    this.userService.addWorkingRange(userWorkingRange).subscribe(result=>{
      if(typeof document ==undefined) return;
      document.querySelector(".add-working-range-modal")?.classList.toggle("show");
      document.querySelector(".modal-backdrop")?.classList.toggle("show");
      this.onLoad.emit();
    })
  }
}
